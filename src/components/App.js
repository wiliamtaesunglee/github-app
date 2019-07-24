"use strict";
import React, { Component } from "react";
import AppContent from "./app-content";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userinfo: {
        username: "Wiliam Tae Sung Lee",
        photo: "https://avatars0.githubusercontent.com/u/41973973?v=4",
        login: "wiliamtaesunglee",
        repos: 12,
        followers: 10,
        following: 10
      },
      repos: [
        {
          name: "Repo",
          link: "#"
        }
      ],
      starred: [
        {
          name: "Repos",
          link: "#"
        }
      ]
    };
  }
  render() {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
      />
    );
  }
}

export default App;
