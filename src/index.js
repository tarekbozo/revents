import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./app/layout/styles.css";
import App from "./app/layout/App";

const rootEl = document.getElementById("root");

const render = () => {
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept("./app/layout/App", function () {
    setTimeout(render);
  });
}

render();
