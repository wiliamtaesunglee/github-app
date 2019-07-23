"use strict";
import React, { Component } from "react";
import AppContent from "./app-content";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userinfo: {
        username: "Fernando Daciuk",
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
        userInfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
      />
    );
  }
}

export default App;
