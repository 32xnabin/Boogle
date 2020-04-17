import React from "react";

import ReactDOM from "react-dom";

import Root from "../components/Root";
import "bootstrap/dist/css/bootstrap.min.css";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Root />,
    document.body.appendChild(document.createElement("div"))
  );
});
