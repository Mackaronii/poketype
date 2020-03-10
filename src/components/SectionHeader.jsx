import React, { Component } from "react";

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
        <p>
          WPM: {this.state.wpm} | ACC: {this.state.acc}%
        </p>
      </div>
    );
  }
}

export default SectionHeader;
