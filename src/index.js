import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./app/layout/styles.css";
import App from "./app/layout/App";
import { Provider } from "react-redux";
import { configureStore } from "./app/store/configuereStore";
import ScrollToTop from "./app/layout/ScrollToTop";

const store = configureStore();

const rootEl = document.getElementById("root");

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </Provider>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept("./app/layout/App", function () {
    setTimeout(render);
  });
}

render();
