import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Splash from "./components/Splash";
import Container from "react-bootstrap/Container";
import PromptTypingSection from "./components/PromptTypingSection";
import { HashRouter, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/" component={Splash} />
            <Route path="/facts">
              <Main category="fact" />
            </Route>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

function Main(props) {
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
      <PromptTypingSection category={props.category} />
    </Container>
  );
}

export default App;
