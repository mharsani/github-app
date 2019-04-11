import React, { Component } from "react";

import requestEndpointGetUsers from "../model/request/users";
import requestEndpointGetRepos from "../model/request/repos";
import Search from "../view/search/Search";
import Message from "../view/message/Message";
import Loader from "../view/loader/Loader";
import { Row} from "../view/styled/Layout";
import Cards from "./card/Cards";
import { Container } from "react-bootstrap";

class App extends Component {
  state = {
    user: {},
    repos: {
      data: []
    },
    search: "",
    load: false,
    error: false,
    isReposEmpty: false,
    isFirstRender: false
  };

  componentDidMount = () => {
    this.setState({ isFirstRender: true });
  };

  renderResquest = async search => {
    this.setState({ load: true,  isFirstRender: false, search});
    try {
      const user = await requestEndpointGetUsers(search);
      const repos = await requestEndpointGetRepos(search);
      this.setState({ user, repos, load: false, error: false, isReposEmpty: false });
      if (repos.data.length === 0) {
          return this.setState({ isReposEmpty: true });
      }
      this.setState({ isReposEmpty: false });
    } catch (err) {
      this.setState({ error: true, load: false });
    }
  };

  handleSubmite = e => {
    e.preventDefault();
    let valueTarget = e.target.inputSearchUser.value;
    if (valueTarget.length >= 2) {
      let search = encodeURI(valueTarget);
      this.renderResquest(search);
    }
  };

  render() {
    const { user, repos, error, isReposEmpty, load, isFirstRender} = this.state;

    return (
      <Container>
        <Row>
          <Search handleSubmite={this.handleSubmite} />
          {!isFirstRender && !error && <Cards user={user} repos={repos} isReposEmpty={isReposEmpty} /> }
          {error && (
            <Message variant="danger" message="Oh snap! You got an error!" />
          )}
        </Row>
        <Loader load={load}/>
      </Container>
    );
  }
}

export default App;