"use strict";
import React, { Component } from "react";
import AppContent from "./app-content";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userinfo: null,
      repos: [],
      starred: []
    };
  }

  handleSearch(e) {
    const value = e.target.value;
    const keyCode = e.wich || e.keyCode;
    const ENTER = 13;
    if (keyCode === ENTER) {
      fetch(`http://api.github.com/users/${value}`)
        .then(res => res.json())
        .then(result =>
          this.setState({
            userinfo: {
              username: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following,
              reposURL: result.repos_url,
              favoritsURL: result.subscriptions_url
            }
          })
        );
    }
  }

  getRepo() {
    console.log("repo");
  }

  getFav() {
    console.log("fev");
  }

  render() {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={e => this.handleSearch(e)}
        getFav={() => this.getFav()}
        getRepo={() => this.getRepo()}
      />
    );
  }
}

export default App;
