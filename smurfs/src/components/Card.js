import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import CardUser from "./CardUser";

export function Card(props) {
  //   console.log("props from Card", props);
  const { data } = props;
  //   debugger;
  return (
    <div>
      {data.map(item => (
        <CardUser item={item} key={item.id} />
      ))}
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(Card);
