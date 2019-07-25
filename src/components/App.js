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

  getRepo(link) {
    return e => {
      fetch(`http://api.github.com/users/wiliamtaesunglee/${link}`)
        .then(res => res.json())
        .then(result => {
          this.setState({
            [link]: result.map(rep => {
              return {
                name: rep.name,
                link: rep.html_url
              };
            })
          });
        });
    };
  }

  render() {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={e => this.handleSearch(e)}
        getFav={this.getRepo("starred")}
        getRepo={this.getRepo("repos")}
      />
    );
  }
}

export default App;
