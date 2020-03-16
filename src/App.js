import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Categories from "./components/Categories";
import Container from "react-bootstrap/Container";
import PromptTypingSection from "./components/PromptTypingSection";
import { HashRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LogIn} />
          <Route path="/categories" component={Categories} />
          <Route path="/facts">
            <Main category="fact" />
          </Route>
          <Route path="/behaviours">
            <Main category="behaviour" />
          </Route>
        </Switch>
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
