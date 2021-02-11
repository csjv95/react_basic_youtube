import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Youtube from "./service/youtube__service";
import App from "./youtube";

const youtube = Youtube;

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById("root")
);
