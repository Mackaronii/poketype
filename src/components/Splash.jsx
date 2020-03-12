import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Splash(props) {
  return (
    <Container style={{ textAlign: "center" }}>
      <Image
        src="https://lh3.googleusercontent.com/proxy/OqsgBGbg5AG5GbQFaTQhlj-TTkIE7GQQueQJwKYMnhkxhRWenViFiWpD7NRiUWS3ZYszms7MhLo1H1DaCMSUhigEmAzL8y9w1w"
        fluid
        style={{
          display: "block",
          maxWidth: "400px",
          margin: "auto",
          marginTop: "50px",
          marginBottom: "50px"
        }}
      />
      <h1>Welcome to Pok&#xe9;Type!</h1>
      <p>
        Challenge other trainers across the globe to be the best typist there
        ever was.
      </p>
      <Link to="/facts">
        <Button variant="outline-primary" style={{ marginTop: "50px" }}>
          Get Started!
        </Button>
      </Link>
    </Container>
  );
}

export default Splash;
