import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Prompt from "./Prompt";
import TypingForm from "./TypingForm";
import Button from "react-bootstrap/Button";

class PromptTypingSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasStarted: false,
      prompts: [],
      prompt: {},
      promptWords: [],
      curWordIndex: 0,
      curWord: "",
      wrongIndices: [],
      correctIndices: [],
      wpm: "XX",
      acc: "XX",
      isInputDisabled: false
    };
  }

  // Get prompts and then generate a new prompt
  componentDidMount() {
    this.getAllPokeFacts().then(facts =>
      this.setState({ prompts: facts }, () => this.generateNewPrompt())
    );
  }

  // Get all PokeFacts
  getAllPokeFacts() {
    const promise = fetch("https://poketype-api.herokuapp.com/v1/facts", {
      method: "GET"
    })
      .then(
        res => res.json(),
        err => console.error(err)
      )
      .then(json => {
        return json["facts"];
      });

    return promise;
  }

  // Submit entry to the leaderboard of the given prompt
  submitLeaderboardEntry(id, date, username, wpm, acc) {
    const entry = {
      pokeFactId: id,
      date: date,
      username: username,
      wpm: wpm,
      acc: acc
    };

    const promise = fetch(
      `https://poketype-api.herokuapp.com/v1/leaderboards`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Connection: "keep-alive"
        },
        body: JSON.stringify(entry)
      }
    );

    return promise;
  }

  // Get the leaderboard for the given prompt
  getLeaderboard(_id) {
    const promise = fetch(
      `https://poketype-api.herokuapp.com/v1/leaderboards?_id=${_id}`,
      {
        method: "GET"
      }
    )
      .then(
        res => res.json(),
        err => console.error(err)
      )
      .then(json => {
        return json["leaderboard"];
      });

    return promise;
  }

  generateNewPrompt = () => {
    const { prompts, prompt } = this.state;

    // Generate a new prompt (cannot be the same as current prompt)
    let newPromptIndex = Math.floor(Math.random() * prompts.length);
    while (prompt["_id"] === prompts[newPromptIndex]["_id"]) {
      newPromptIndex = Math.floor(Math.random() * prompts.length);
    }
    const newPrompt = prompts[newPromptIndex];

    // Set state for new prompt and enable input
    this.setState(
      {
        hasStarted: false,
        prompt: newPrompt,
        promptWords: newPrompt.fact.split(" "),
        curWordIndex: 0,
        wrongIndices: [],
        correctIndices: [],
        wpm: "XX",
        acc: "XX",
        isInputDisabled: false
      },
      () => {
        this.setState({ curWord: this.state.promptWords[0] });
      }
    );
  };

  // Reset the typing form for the same prompt
  retryPrompt = () => {
    this.setState({
      hasStarted: false,
      curWord: this.state.promptWords[0],
      curWordIndex: 0,
      wrongIndices: [],
      correctIndices: [],
      wpm: "XX",
      acc: "XX",
      isInputDisabled: false
    });
  };

  changeHandler = e => {
    // Set start time on first key press
    if (!this.state.hasStarted) {
      const startTime = Date.now();
      this.setState({ hasStarted: true, startTime: startTime });
      console.log(`Timer started: ${startTime}`);
    }

    const curInput = e.target.value;

    if (this.isSpaceKeyPressed(curInput)) {
      // [space] key pressed
      const curInputNoSpace = curInput.substr(0, curInput.length - 1);
      this.compareWord(curInputNoSpace);
      e.target.value = ""; // Clear input control
      e.target.style.backgroundColor = "#FFF";
    } else if (this.isLastWord(curInput)) {
      // Automatically push word without needing a [Space] press if last word
      this.compareWord(curInput);
      e.target.value = ""; // Clear input control
    } else {
      // Highlight the input field if the user's input is incorrect
      if (curInput !== this.state.curWord.substr(0, curInput.length)) {
        e.target.style.backgroundColor = "#EE7878";
      } else {
        e.target.style.backgroundColor = "#FFF";
      }
    }
  };

  compareWord = inputWord => {
    // Check if input matches current word
    if (this.state.curWord === inputWord) {
      this.state.correctIndices.push(this.state.curWordIndex);
    } else {
      this.state.wrongIndices.push(this.state.curWordIndex);
    }

    // Get next word if prompt is incomplete
    this.setState({ curWordIndex: this.state.curWordIndex + 1 }, () => {
      if (this.state.curWordIndex < this.state.promptWords.length) {
        this.setState({
          curWord: this.state.promptWords[this.state.curWordIndex]
        });
      } else {
        this.promptCompleted();
      }
    });
  };

  promptCompleted = () => {
    // Get duration
    const endTime = Date.now();
    console.log(`Timer ended: ${endTime}`);
    const durationMs = endTime - this.state.startTime;
    const durationSec = durationMs / 1000;

    // Get WPM (only counts correct words)
    const wpm = Math.round(
      (this.state.correctIndices.length / durationSec) * 60
    );

    // Get accuracy
    const numCorrect = this.state.correctIndices.length;
    const numTotal = this.state.promptWords.length;
    const acc = parseFloat(((numCorrect / numTotal) * 100).toFixed(2));

    this.setState({ isInputDisabled: true, wpm: wpm, acc: acc }, () => {
      // Post leaderboard entry
      this.submitLeaderboardEntry(
        this.state.prompt["_id"],
        new Date(),
        "test_user",
        wpm,
        acc
      ).then(res => console.log(res));
    });
  };

  // Returns true if the last character of input is a [space]
  isSpaceKeyPressed = input => {
    return input.substr(input.length - 1) === " ";
  };

  // Returns true if the input matches the current word and
  // the current word is the last word of the prompt
  isLastWord = word => {
    return (
      this.state.curWordIndex === this.state.promptWords.length - 1 &&
      word === this.state.curWord
    );
  };

  render() {
    return (
      <div>
        <SectionHeader wpm={this.state.wpm} acc={this.state.acc} />
        <Container
          style={{
            backgroundColor: "#ECECEC",
            borderRadius: "10px",
            padding: "30px",
            textAlign: "left"
          }}
        >
          <Prompt
            promptWords={this.state.promptWords}
            curWordIndex={this.state.curWordIndex}
            correctIndices={this.state.correctIndices}
            wrongIndices={this.state.wrongIndices}
          />
          <TypingForm
            changeHandler={this.changeHandler}
            isDisabled={this.state.isInputDisabled}
          />
          <Button
            variant="primary"
            onClick={this.generateNewPrompt}
            style={{ marginTop: "50px" }}
          >
            Give me another Pok&#xe9;Fact!
          </Button>
          <Button
            variant="outline-dark"
            onClick={this.retryPrompt}
            style={{ marginTop: "50px", marginLeft: "20px" }}
          >
            Retry
          </Button>
        </Container>
      </div>
    );
  }
}

export default PromptTypingSection;
