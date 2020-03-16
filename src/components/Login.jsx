import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const Link = require("react-router-dom").Link;

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      showError: false,
      formUsername: "",
      formPassword: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  handleChange(e) {
    // Update field states and then validate form
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { formUsername, formPassword } = this.state;
    this.logIn(formUsername, formPassword).then(isLoggedIn => {
      if (isLoggedIn) {
        this.setState({ isLoggedIn: true });
        console.log("Logged in");
      } else {
        this.setState({ showError: true });
        console.log("Either the user does not exist or invalid credentials.");
      }
    });
  }

  logIn(username, password) {
    const credentials = {
      username: username,
      password: password
    };

    const promise = fetch(`https://poketype-api.herokuapp.com/v1/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    }).then(
      res => {
        if (res.status === 200) {
          // User successfully logged in
          return true;
        } else {
          return false;
        }
      },
      err => console.error(err)
    );

    return promise;
  }

  render() {
    return (
      <Container>
        <h2 style={{ textAlign: "center", padding: "30px" }}>
          Log in to Pok&#xe9;Type
        </h2>
        {this.state.isLoggedIn ? (
          <div>
            <p>Successfully logged in!</p>
            <Link to="/categories">
              <Button
                variant="outline-primary"
                size="lg"
                type="submit"
                style={{ borderRadius: "20px" }}
              >
                Get Started
              </Button>
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
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                autoComplete="off"
                onChange={this.handleChange}
              />
            </Form.Group>
            <p
              style={{
                color: "red",
                display: this.state.showError ? "block" : "none"
              }}
            >
              Either your credentials are incorrect or the server could not find
              the user
            </p>
            <Button
              block
              type="submit"
              variant="primary"
              style={{ borderRadius: "20px" }}
            >
              Log In
            </Button>
          </Form>
        )}
      </Container>
    );
  }
}

export default LogIn;
