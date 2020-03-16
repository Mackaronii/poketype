import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import SignUpModal from "./SignUpModal";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSignUp: false
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleShow() {
    this.setState({ showSignUp: true });
  }

  handleClose() {
    this.setState({ showSignUp: false });
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
          <SignUpModal
            show={this.state.showSignUp}
            handleClose={this.handleClose}
          />
          <Button
            block
            variant="primary"
            style={signUpBtnStyle}
            onClick={this.handleShow}
          >
            Sign Up / Continue as Guest
          </Button>
          <Link to="/login">
            <Button variant="link">I already have an account</Button>
          </Link>
        </Row>
      </Container>
    );
  }
}

export default Home;
