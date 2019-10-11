import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

import * as reducers from "./state/reducers";
import "./index.css";
import App from "./components/App";

const monsterReducer = combineReducers({
  state: reducers.smurfsReducer,
  form: formReducer
});

//the store that stores everything
const store = createStore(
  monsterReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
