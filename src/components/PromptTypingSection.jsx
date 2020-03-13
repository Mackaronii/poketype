import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Prompt from "./Prompt";
import PromptLeaderboard from "./PromptLeaderboard";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class PromptTypingSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: props.category,
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
      isInputDisabled: false,
      isLeaderboardVisible: false
    };
  }

  // Get prompts and then generate a new prompt
  componentDidMount() {
    if (this.state.category === "") {
      this.getAllPrompts().then(prompts =>
        this.setState({ prompts: prompts }, () => this.generateNewPrompt())
      );
    } else {
      this.getPromptsByCategory().then(prompts =>
        this.setState({ prompts: prompts }, () => this.generateNewPrompt())
      );
    }
  }

  // Get all prompts
  getAllPrompts() {
    const promise = fetch("https://poketype-api.herokuapp.com/v1/prompts", {
      method: "GET"
    })
      .then(
        res => res.json(),
        err => console.error(err)
      )
      .then(json => {
        return json["prompts"];
      });

    return promise;
  }

  getPromptsByCategory() {
    const promise = fetch(
      `https://poketype-api.herokuapp.com/v1/prompts?category=${this.state.category}`,
      {
        method: "GET"
      }
    )
      .then(
        res => res.json(),
        err => console.error(err)
      )
      .then(json => {
        return json["prompts"];
      });

    return promise;
  }

  // Submit entry to the leaderboard of the given prompt
  submitPromptLeaderboardEntry(promptId, username, wpm, acc, date) {
    const entry = {
      username: username,
      wpm: wpm,
      acc: acc,
      date: date
    };

    const promise = fetch(
      `https://poketype-api.herokuapp.com/v1/prompt_leaderboards/${promptId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Connection: "keep-alive"
        },
        body: JSON.stringify(entry)
      }
    ).then(res => console.log(res));

    return promise;
  }

  // Get prompt leaderboard by ID
  getPromptLeaderboardById(promptId) {
    const promise = fetch(
      `https://poketype-api.herokuapp.com/v1/prompt_leaderboards?promptId=${promptId}`,
      {
        method: "GET"
      }
    )
      .then(
        res => res.json(),
        err => console.error(err)
      )
      .then(json => {
        const leaderboard = json["prompt_leaderboard"];
        console.log(leaderboard);
        return leaderboard;
      });

    return promise;
  }

  generateNewPrompt = () => {
    // Generate a new prompt (cannot be the same as current prompt)
    let newPromptIndex = Math.floor(Math.random() * this.state.prompts.length);
    while (
      this.state.prompt["_id"] === this.state.prompts[newPromptIndex]["_id"]
    ) {
      newPromptIndex = Math.floor(Math.random() * this.state.prompts.length);
    }
    const newPrompt = this.state.prompts[newPromptIndex];

    // Set state for new prompt and enable input
    this.setState(
      {
        hasStarted: false,
        prompt: newPrompt,
        promptWords: newPrompt["prompt"].split(" "),
        curWordIndex: 0,
        wrongIndices: [],
        correctIndices: [],
        wpm: "XX",
        acc: "XX",
        isInputDisabled: false,
        isLeaderboardVisible: false
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
      // First, post prompt leaderboard entry
      this.submitPromptLeaderboardEntry(
        this.state.prompt["_id"],
        "test_user",
        wpm,
        acc,
        new Date()
      )
        // Then get the prompt leaderboard for the current prompt
        .then(() => this.getPromptLeaderboardById(this.state.prompt["_id"]))
        // Finally, show the leaderboard
        .then(prompt_leaderboard =>
          this.setState({
            prompt_leaderboard: prompt_leaderboard,
            isLeaderboardVisible: true
          })
        );
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
            marginBottom: "30px",
            textAlign: "center"
          }}
        >
          <Prompt
            promptWords={this.state.promptWords}
            curWordIndex={this.state.curWordIndex}
            correctIndices={this.state.correctIndices}
            wrongIndices={this.state.wrongIndices}
          />
          <Form
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <Form.Control
              type="text"
              onChange={this.changeHandler}
              disabled={this.state.isInputDisabled}
            />
          </Form>
          <div style={{ marginTop: "30px" }}>
            <Button
              variant="primary"
              onClick={this.generateNewPrompt}
              style={{ marginRight: "20px" }}
            >
              Give me another Pok&#xe9;Prompt!
            </Button>
            <Button variant="outline-dark" onClick={this.retryPrompt}>
              Retry
            </Button>
          </div>
        </Container>
        {this.state.isLeaderboardVisible ? (
          <PromptLeaderboard
            promptId={this.state.prompt["_id"]}
            leaderboard={this.state.prompt_leaderboard}
          />
        ) : (
          <p style={{ textAlign: "center" }}>
            Complete the Pok&#xe9;Prompt above to view its leaderboards!
          </p>
        )}
      </div>
    );
  }
}

export default PromptTypingSection;
