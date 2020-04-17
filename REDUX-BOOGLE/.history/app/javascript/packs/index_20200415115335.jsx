// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import { createStore, applyMiddleware } from "redux";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";

// import App from "../components/App";
import UsersContainer from "../components/UsersContainer";

import { Provider } from "react-redux";

import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";

import userReducer from "../redux/user/userReducer";

const store = createStore(
  userReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

const Hello = (props) => <div>Hello {props.name}!</div>;

Hello.defaultProps = {
  name: "David",
};

Hello.propTypes = {
  name: PropTypes.string,
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Provider store={store}>
      <Hello name="React" />,
    </Provider>,
    document.body.appendChild(document.createElement("div"))
  );
});
