"use strict";
import React, { Component } from "react";
import Search from "./Search";
import UserInfo from "./UserInfo";
import Actions from "./Actions";
import Repos from "./Repos";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Search />
        <UserInfo />
        <Actions />
        <Repos
          className="repos"
          title="Repositórios:"
          repos={[{ name: "Nome do Repositório", link: "#" }]}
        />
        <Repos
          className="Starred"
          title="Favoritos"
          repos={[{ name: "Nome do Repositório", link: "#" }]}
        />
      </div>
    );
  }
}

export default App;
