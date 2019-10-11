import React, { Component } from "react";

import { Field, reduxForm, reset } from "redux-form";
import { submitToServer } from "../state/actionCreators";
import { UPDATE_DATA } from "../state/actionTypes";
import { Button } from "@chakra-ui/core";

class MyForm extends Component {
  submit = values => {
    console.log("submit inside form");
    submitToServer(values).then(data => {
      //   debugger;
      this.props.dispatch({ type: UPDATE_DATA, payload: data });
      this.props.dispatch(reset("contact"));
    });
  };

  render() {
    // console.log(this.props);
    return (
      <form onSubmit={this.props.handleSubmit(this.submit)}>
        <div>
          <label htmlFor="name">name</label>
          <Field name="name" component="input" type="text"></Field>
        </div>
        <div>
          <label htmlFor="age">age</label>
          <Field name="age" component="input" type="text"></Field>
        </div>
        <div>
          <label htmlFor="height">height</label>
          <Field name="height" component="input" type="text"></Field>
        </div>
        <Button type="submit" variantColor="blue" size="lg" marginY="20px">
          Submit
        </Button>
      </form>
    );
  }
}

MyForm = reduxForm({
  // a unique name for the form
  form: "contact"
})(MyForm);

export default MyForm;
