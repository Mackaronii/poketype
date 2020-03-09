import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import PromptTypingSection from "./components/PromptTypingSection";

class App extends React.Component {
  render() {
    return (
      <Container
        style={{
          paddingTop: "30px",
          paddingBottom: "30px",
          textAlign: "center",
          fontFamily: "Verdana"
        }}
      >
        <h4 style={{ marginBottom: "50px" }}>Pok&#xe9;Type</h4>
        <PromptTypingSection />
      </Container>
    );
  }
}

export default App;
