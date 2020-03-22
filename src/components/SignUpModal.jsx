import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
const Link = require("react-router-dom").Link;

class SignUpModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: props.show,
      formUsername: "",
      formPassword: "",
      formConfirmPassword: "",
      isValidated: false,
      isUsernameTaken: false,
      isValid: {
        formUsername: false,
        formPassword: false,
        formConfirmPassword: false
      },
      isSubmitEnabled: false,
      isSubmitLoading: false,
      isSignedUp: false
    };

    this.handleClose = props.handleClose;
    this.handleExited = this.handleExited.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ show: newProps.show });
  }

  handleChange(e) {
    // Update field states and then validate form
    this.setState(
      { [e.target.id]: e.target.value, isUsernameTaken: false },
      () => this.validateForm()
    );
  }

  validateForm() {
    // Validate fields
    this.setState(
      {
        isValid: {
          formUsername: this.state.isValidated
            ? !this.state.isUsernameTaken && this.state.formUsername.length > 0
            : this.state.formUsername.length > 0,
          formPassword: this.state.formPassword.length >= 6,
          formConfirmPassword:
            this.state.formConfirmPassword.length >= 6 &&
            this.state.formPassword === this.state.formConfirmPassword
        }
      },
      () =>
        // Then enable the submit button is all fields are valid
        this.setState({
          isSubmitEnabled: Object.keys(this.state.isValid).every(
            key => this.state.isValid[key]
          )
            ? true
            : false
        })
    );
  }

  handleSubmit(e) {
    e.preventDefault();

    const { formUsername, formPassword } = this.state;

    // Disable submit button while fetches are executing
    this.setState({ isSubmitLoading: true }, () => {
      // Check username availability
      this.checkIfUsernameTaken(formUsername).then(isUsernameTaken => {
        // Show error is username taken
        if (isUsernameTaken) {
          this.setState({
            isSubmitLoading: false,
            isValidated: true,
            isUsernameTaken: true
          });
        } else {
          // Create user
          this.createUser(formUsername, formPassword).then(isSuccess => {
            if (isSuccess) {
              // Successfully created user, show log in button
              this.setState({
                isSignedUp: true,
                isSubmitLoading: false,
                isValidated: true
              });
            } else {
              // Failed to create user, show error
              this.setState({ isSubmitLoading: false, isValidated: true });
            }
          });
        }
      });
    });
  }

  // Clean up state for when modal is exited
  handleExited() {
    this.setState({
      isSubmitEnabled: false,
      isSubmitLoading: false,
      formUsername: "",
      formPassword: "",
      formConfirmPassword: "",
      isUsernameTaken: false,
      isValid: {
        formUsername: false,
        formPassword: false,
        formConfirmPassword: false
      }
    });
  }

  checkIfUsernameTaken(username) {
    return fetch(
      `https://poketype-api.herokuapp.com/v1/users?username=${username}`,
      {
        method: "GET"
      }
    )
      .then(
        res => res.json(),
        err => console.error(err)
      )
      .then(json => json.success);
  }

  // Create a new user. Return true if successful and false otherwise.
  createUser(username, password) {
    const user = {
      username: username,
      password: password
    };

    return fetch(`https://poketype-api.herokuapp.com/v1/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(user)
    })
      .then(
        res => res.json(),
        err => console.error(err)
      )
      .then(json => json.success);
  }

  render() {
    return (
      <Modal
        centered
        show={this.state.show}
        onHide={this.handleClose}
        onExited={this.handleExited}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create Your Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.state.isSignedUp ? (
            <div>
              <p>Your account has been created!</p>
              <Link to="/login">
                <Button variant="primary">Log In</Button>
              </Link>
            </div>
          ) : (
            <Form noValidate onSubmit={this.handleSubmit}>
              <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  required
                  type="text"
                  autoComplete="off"
                  onChange={this.handleChange}
                  isValid={this.state.isValid.formUsername}
                  isInvalid={this.state.isUsernameTaken}
                />
                <Form.Control.Feedback type="invalid">
                  Username is already taken
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  onChange={this.handleChange}
                  isValid={this.state.isValid.formPassword}
                  isInvalid={
                    this.state.formPassword !== "" &&
                    !this.state.isValid.formPassword
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Must be at least 6 characters long
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  onChange={this.handleChange}
                  isValid={this.state.isValid.formConfirmPassword}
                  isInvalid={
                    this.state.formConfirmPassword !== "" &&
                    !this.state.isValid.formConfirmPassword
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Passwords do not match
                </Form.Control.Feedback>
              </Form.Group>
              <Button
                block
                type="submit"
                variant="primary"
                disabled={
                  !this.state.isSubmitEnabled || this.state.isSubmitLoading
                }
                style={{ borderRadius: "20px" }}
              >
                <Spinner
                  variant="light"
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  style={{
                    marginRight: "10px",
                    visibility: this.state.isSubmitLoading
                      ? "visible"
                      : "hidden"
                  }}
                />
                {this.state.isSubmitLoading ? "Creating..." : "Create Account"}
              </Button>
            </Form>
          )}
        </Modal.Body>
        {this.state.isSignedUp ? null : (
          <Modal.Footer>
            <Button disabled={true} variant="link" onClick={this.handleClose}>
              Continue as guest
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    );
  }
}

export default SignUpModal;
