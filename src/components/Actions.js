"use strict";

import React from "react";
import PropTypes from "prop-types";

const Actions = ({ getRepo, getFav }) => (
  <div>
    <div className="actions">
      <button onClick={getRepo}>Ver repositórios</button>
      <button onClick={getFav}>Ver favoritos</button>
    </div>
  </div>
);

Actions.propTypes = {
  getRepo: PropTypes.func,
  getFav: PropTypes.func
};

export default Actions;
