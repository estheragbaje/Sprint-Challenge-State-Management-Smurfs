import React, { Component } from "react";

import { Field, reduxForm } from "redux-form";
import { submitToServer } from "../state/actionCreators";

class MyForm extends Component {
  submit = values => {
    console.log("submit inside form");
    submitToServer(values).then(data => console.log(data));
  };
  render() {
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
        <button type="submit">Submit</button>
      </form>
    );
  }
}

MyForm = reduxForm({
  // a unique name for the form
  form: "contact"
})(MyForm);

export default MyForm;
