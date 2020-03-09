import React, { Component } from "react";

class Prompt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promptWords: props.promptWords,
      curWordIndex: props.curWordIndex,
      correctIndices: props.correctIndices,
      wrongIndices: props.wrongIndices
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      promptWords: newProps.promptWords,
      curWordIndex: newProps.curWordIndex,
      correctIndices: newProps.correctIndices,
      wrongIndices: newProps.wrongIndices
    });
  }

  render() {
    return (
      <div style={{ marginBottom: "20px" }}>
        {this.state.promptWords.map((word, i) => (
          <p
            key={i}
            style={{
              display: "inline",
              fontSize: "18px",
              color:
                i === this.state.curWordIndex
                  ? "#D06AFF"
                  : this.state.correctIndices.includes(i)
                  ? "#69B23F"
                  : this.state.wrongIndices.includes(i)
                  ? "#D60000"
                  : "#000"
            }}
          >
            {word + " "}
          </p>
        ))}
      </div>
    );
  }
}

export default Prompt;
