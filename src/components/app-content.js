"use strict";

import React from "react";
import Search from "./Search";
import Actions from "./Actions";
import Repos from "./Repos";
import UserInfo from "./UserInfo";
import PropTypes from "prop-types";

const AppContent = ({
  userinfo,
  repos,
  starred,
  handleSearch,
  getFav,
  getRepo
}) => (
  <div className="app">
    <Search handleSearch={handleSearch} />
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions getRepo={getRepo} getFav={getFav} />}
    {!!repos.length && (
      <Repos className="repos" title="Repositórios:" repos={repos} />
    )}
    {!!starred.length && (
      <Repos className="Starred" title="Favoritos" repos={starred} />
    )}
  </div>
);

AppContent.propTypes = {
  getFav: PropTypes.func.isRequired,
  getRepo: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired
};

export default AppContent;
