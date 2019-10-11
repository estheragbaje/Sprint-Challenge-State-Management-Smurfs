import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export function CardUser(props) {
  //   console.log("props from carduser", props);
  const { item } = props;

  return (
    <div>
      <h2>My name is {item.name}</h2>
      <h3>My age is {item.age}</h3>
      <h4>Height: {item.height}</h4>
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(CardUser);
