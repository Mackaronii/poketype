import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSignUp: false,
      validated: false,
      formUsername: "",
      formPassword: ""
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleShow() {
    this.setState({ showSignUp: true });
  }

  handleClose() {
    this.setState({ showSignUp: false, validated: false });
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    // Update modal UI to reflect validation
    this.setState({ validated: true });

    // Check if fields in form are valid
    if (!e.target.checkValidity()) {
      e.stopPropagation();
    } else {
      // Try to create new user. Close modal if successful.
      this.createUser().then(isUserPosted => {
        if (isUserPosted) {
          this.handleClose();
        }
      });
    }
  }

  // Create a new user. Return true if successful and false otherwise.
  createUser() {
    const user = {
      username: this.state.formUsername,
      password: this.state.formPassword
    };

    const promise = fetch(`https://poketype-api.herokuapp.com/v1/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(
      res => {
        if (res.status === 201) {
          // User successfully created
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
    const containerTableStyle = {
      display: "table",
      height: "100vh"
    };

    const verticalCenterRowStyle = {
      display: "table-cell",
      verticalAlign: "middle",
      textAlign: "center"
    };

    const imageStyle = {
      display: "block",
      maxWidth: "200px",
      margin: "auto",
      marginBottom: "50px"
    };

    const signUpBtnStyle = {
      margin: "auto",
      maxWidth: "400px",
      marginTop: "50px",
      borderRadius: "20px"
    };

    const splashUrl = process.env.PUBLIC_URL + "/assets/splash.png";

    return (
      <Container style={containerTableStyle}>
        <Row style={verticalCenterRowStyle}>
          <Image fluid src={splashUrl} style={imageStyle} />
          <h1>Welcome to Pok&#xe9;Type!</h1>
          <p>
            Challenge other trainers across the globe to be the best typist
            there ever was.
          </p>
          <Modal
            centered
            show={this.state.showSignUp}
            onHide={this.handleClose}
          >
            <Modal.Header closeButton>
              <Modal.Title>Create Your Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form
                noValidate
                validated={this.state.validated}
                onSubmit={this.handleSubmit}
              >
                <Form.Group controlId="formUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter username"
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your username
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Enter password"
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your password
                  </Form.Control.Feedback>
                </Form.Group>
                <Button block type="submit" variant="primary">
                  Create Account
                </Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="link" onClick={this.handleClose}>
                Continue as guest
              </Button>
            </Modal.Footer>
          </Modal>
          <Button
            block
            variant="primary"
            style={signUpBtnStyle}
            onClick={this.handleShow}
          >
            Sign Up / Continue as Guest
          </Button>
          <Link to="/categories">
            <Button variant="link">
              I already have an account (temporarily routes to categories)
            </Button>
          </Link>
        </Row>
      </Container>
    );
  }
}

export default Home;
