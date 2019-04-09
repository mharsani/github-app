import React, { Component } from 'react';

import requestEndpointGetUsers from '../model/request/users';
import requestEndpointGetStarred from '../model/request/starred';
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

  handleSubmite = e => {
    e.preventDefault();
      let valueTarget = e.target.inputSearchUser.value;
      if (valueTarget.length >= 2) {
        let search = encodeURI(valueTarget);
        ((async () => {
          const user = await requestEndpointGetUsers(search);
          const repos = await requestEndpointGetStarred(search);
          this.setState({search , user, repos});
        })()).catch(() => this.setState({ error: true }))
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
