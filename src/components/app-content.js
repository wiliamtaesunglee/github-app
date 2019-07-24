"use strict";

import React from "react";
import Search from "./Search";
import Actions from "./Actions";
import Repos from "./Repos";
import UserInfo from "./UserInfo";
import PropTypes from "prop-types";

const AppContent = ({ userinfo, repos, starred, handleSearch }) => (
  <div className="app">
    <Search handleSearch={handleSearch} />
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions />}
    {!!repos.length && (
      <Repos className="repos" title="Repositórios:" repos={repos} />
    )}
    {!!starred.length && (
      <Repos className="Starred" title="Favoritos" repos={starred} />
    )}
  </div>
);

AppContent.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired
};

export default AppContent;
