import React, { Component } from 'react';

import requestEndpointGetUsers from '../model/request/users';
import requestEndpointGetRepos from '../model/request/repos';
import Search from '../view/search/Search';
import Cards from './card/Cards';
import { Container } from 'react-bootstrap';

class App extends Component {
  state = { 
    user:[],
    repos:[],
    search: '',
    load: false,
    error: false
  }

  componentDidMount = () => {
   console.log(this.state)
  }

  renderResquest = async search => {
    try {
      const user = await requestEndpointGetUsers(search);
      const repos = await requestEndpointGetRepos(search);
      this.setState({search , user, repos});
    } catch (err) {
      this.setState({ error: true });
    }
  }

  handleSubmite = e => {
    e.preventDefault();
      let valueTarget = e.target.inputSearchUser.value;
      if (valueTarget.length >= 2) {
        let search = encodeURI(valueTarget);
        this.renderResquest(search);
      }
  };

  render() {
    const { user, repos, error } = this.state;

    return (
      <Container>
          <Search
          handleSubmite={this.handleSubmite}  />
          <Cards user={user} repos={repos} />
          {error && 'porra erro'}
      </Container>
    );
  }
}

export default App;
