import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Splash() {
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
    maxWidth: "400px",
    margin: "auto",
    marginBottom: "50px"
  };

  return (
    <Container style={containerTableStyle}>
      <Row style={verticalCenterRowStyle}>
        <Image
          fluid
          src="https://lh3.googleusercontent.com/proxy/OqsgBGbg5AG5GbQFaTQhlj-TTkIE7GQQueQJwKYMnhkxhRWenViFiWpD7NRiUWS3ZYszms7MhLo1H1DaCMSUhigEmAzL8y9w1w"
          style={imageStyle}
        />
        <h1>Welcome to Pok&#xe9;Type!</h1>
        <p>
          Challenge other trainers across the globe to be the best typist there
          ever was.
        </p>
        <Link to="/categories">
          <Button variant="outline-primary" style={{ marginTop: "30px" }}>
            Get Started!
          </Button>
        </Link>
      </Row>
    </Container>
  );
}

export default Splash;
