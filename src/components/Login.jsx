import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Link from "react-router-dom/Link";

function LogIn(props) {
  return (
    <Container style={{ textAlign: "center", paddingTop: "30px" }}>
      <h2>Log in to Pok&#xe9;Type</h2>
      <Link to="/categories">
        <Button>Still under construction! Continue to Categories...</Button>
      </Link>
    </Container>
  );
}

export default LogIn;
