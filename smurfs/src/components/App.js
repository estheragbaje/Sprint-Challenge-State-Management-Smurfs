import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import { Card } from "./Card";
import MyForm from "./MyForm";

export function App(props) {
  // debugger
  useEffect(() => {
    actionCreators.getData();
  }, []);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>

      <br />
      <MyForm />
      <br />
      <Card data={props.state.data} />
    </div>
  );
}

export default connect(
  state => state,
  actionCreators.getData
)(App);
