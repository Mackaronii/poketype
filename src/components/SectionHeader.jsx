import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

class SectionHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wpm: "XX",
      acc: "XX"
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({ wpm: newProps.wpm, acc: newProps.acc });
  }

  render() {
    return (
      <div>
        <Link to="/categories">
          <Button variant="link">Back to Categories</Button>
        </Link>
        <p>
          WPM: {this.state.wpm} | ACC: {this.state.acc}%
        </p>
      </div>
    );
  }
}

export default SectionHeader;
