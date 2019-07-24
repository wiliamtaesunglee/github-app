"use strict";

import React from "react";
import PropTypes from "prop-types";

const UserInfo = ({ userinfo }) => (
  <div className="user-info">
    <img src={userinfo.photo} />
    <h1>
      <a href={`https://github.com/${userinfo.login}`} /> {userinfo.username}
    </h1>
    <ul className="repos-info">
      <li>- Repositórios: </li>
      <li>- Seguidores: </li>
      <li>- Seguindo: </li>
    </ul>
  </div>
);

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
};

export default UserInfo;
