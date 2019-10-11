import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import { Card } from "./Card";

export function App(props) {
  // debugger
  useEffect(() => {
    actionCreators.getData();
  }, []);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <Card data={props.state.data} />
    </div>
  );
}

export default connect(
  state => state,
  actionCreators.getData
)(App);
