import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App.js";

ReactDOM.hydrate(<App />, document.getElementById("mountNode"));
