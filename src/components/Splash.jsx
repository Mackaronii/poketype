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
    maxWidth: "300px",
    margin: "auto",
    marginBottom: "50px"
  };

  const splashImages = [
    "https://lh3.googleusercontent.com/proxy/eWgQX4VhR5DzHc2t02u6awzYn940GpNhVI80JXjQ7VIHBfsTjsDVDplnzHLEbFhHEl2D4zfVQQWV-CQOP_Do-__HsC4VfgQS2OJiSqYA3bWhFr8x5Lg8zw7tOfmbtqIISg"
  ];

  const randIndex = Math.floor(Math.random() * splashImages.length);

  return (
    <Container style={containerTableStyle}>
      <Row style={verticalCenterRowStyle}>
        <Image fluid src={splashImages[randIndex]} style={imageStyle} />
        <h1>Welcome to Pok&#xe9;Type!</h1>
        <p>
          Challenge other trainers across the globe to be the best typist there
          ever was.
        </p>
        <Link to="/categories">
          <Button variant="outline-primary" style={{ marginTop: "30px" }}>
            Get Started
          </Button>
        </Link>
      </Row>
    </Container>
  );
}

export default Splash;
