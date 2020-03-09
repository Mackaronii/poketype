import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class TypingForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDisabled: props.isDisbled
    };

    this.changeHandler = props.changeHandler;
  }

  componentWillReceiveProps(newProps) {
    this.setState({ isDisabled: newProps.isDisabled });
  }

  // Prevents [enter] key press from refreshing the page
  submitHandler = e => {
    e.preventDefault();
  };

  render() {
    return (
      <Form onSubmit={this.submitHandler}>
        <Form.Control
          type="text"
          onChange={this.changeHandler}
          disabled={this.state.isDisabled}
        />
      </Form>
    );
  }
}

export default TypingForm;
