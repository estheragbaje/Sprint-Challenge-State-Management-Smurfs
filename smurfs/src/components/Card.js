import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import CardUser from "./CardUser";
import { Grid } from "@chakra-ui/core";

export function Card(props) {
  //   console.log("props from Card", props);
  const { data } = props;
  //   debugger;
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap="40px">
      {data.map(item => (
        <CardUser item={item} key={item.id} />
      ))}
    </Grid>
  );
}

export default connect(
  state => state,
  actionCreators
)(Card);
