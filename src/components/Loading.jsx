import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Spinner from "react-bootstrap/Spinner";

function Loading(props) {
  return (
    <Container>
      <Image
        src={process.env.PUBLIC_URL + "/assets/loading.gif"}
        style={{ display: "block", margin: "auto" }}
      />
      <p>
        Please wait while Pikachu fetches your prompt. Subsequent prompts won't
        take as long.
      </p>
      <Spinner animation="grow" role="status" />
    </Container>
  );
}

export default Loading;
