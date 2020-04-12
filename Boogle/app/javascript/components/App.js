import React from "react";
import Cells from "./Cells";
import Countdown from "react-countdown-now";
import { Container, Row, Col, Button } from "reactstrap";
import axios from "axios";

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
};

const Completionist = () => <span>You are good to go!</span>;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total_score: 0,
      timer_start: Date.now(),
      disabled: false,
      result: "",
      score: 0,
      corrects: ["adsf", "sdfasf"],
      incorrects: [],
      mtrx: [],
    };
    this.submitWord = this.submitWord.bind(this);
  }
  handleChangeValue = (e) => this.setState({ mtrx: e.target.value });

  submitWord(e) {
    if (e.key === "Enter") {
      let submitted_word = e.target.value.trim();

      axios
        .post("http://localhost:3000/submit_word", {
          letters: submitted_word,
          board_letters: "good",
        })
        .then((response) => {
          console.log(response.data.result);
          if (response.data.result.length > 0) {
            let msg = "";
            let msg_type = "";
            if (response.data.result.length === 2) {
              msg = "Nice";
              msg_type = "green";
            } else if (response.data.result.length === 3) {
              msg = "Cool";
              msg_type = "green";
            } else {
              msg = "Awesome";
              msg_type = "green";
            }
            // this.setState((prevState) => ({
            //   correct_words: [...prevState.correct_words, response.data.result],
            //   messageToUser: msg,
            //   messageType: msg_type,
            // }));

            // // total score is sum of letters in all the words in the array
            // this.setState({
            //   total_score: this.state.correct_words.join("").length,
            // });
            // alert(response.data.test_res)
          } else {
            this.setState({ messageToUser: "Wrong !", messageType: "red" });
          }
        })
        .catch((response) => {
          console.log(response);
        });
      e.target.value = "";
    }
  }
  restart(e) {
    e.preventDefault();

    if (confirm("Are you sure ?")) {
      window.location.reload();
    }
  }
  start(e) {}

  render() {
    return (
      <div>
        <div>
          <Cells
            value={this.state.cells}
            onChangeValue={this.handleChangeValue}
          />
        </div>
        <br />
        <div>
          <Countdown date={Date.now() + 180000}>
            <Completionist />
          </Countdown>
          score: <div>{this.state.score}</div>
          <input
            placeholder="Enter text here"
            onKeyDown={this.submitWord.bind(this)}
            disabled={this.props.disabled ? "disabled" : ""}
          />
          <label>{this.state.result}</label>
          <ul>
            {this.state.corrects.map((node, index) => (
              <li key={index}>{node}</li>
            ))}
          </ul>
          <Button onClick={this.restart} color="primary" size="sm">
            Restart
          </Button>
        </div>
      </div>
    );
  }
}
export default App;
