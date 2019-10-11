import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import { Text, Heading, Box } from "@chakra-ui/core";

export function CardUser(props) {
  //   console.log("props from carduser", props);
  const { item } = props;

  return (
    <Box>
      <Heading fontSize="lg">My name is {item.name}</Heading>
      <Text>I am {item.age} years</Text>
      <Text>Height: {item.height}cm</Text>
    </Box>
  );
}

export default connect(
  state => state,
  actionCreators
)(CardUser);
