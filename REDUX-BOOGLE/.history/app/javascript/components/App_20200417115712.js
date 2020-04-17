import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchMatrix, validateWord } from "../rdx/actions";
import Picker from "./Picker";

import Cells from "./Cells";
import Countdown from "react-countdown-now";

const timer = ({ minutes, seconds, completed }, props) => {
  if (completed) {
    return <span>Time's Up !!!</span>;
  } else {
    return (
      <span>
        0{minutes}:{seconds}
      </span>
    );
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game_is_on: true,
      messageToUser: "",
      messageType: "",
      correct_words: [],
      attempted_words: [],
      total_score: 0,

      timer_start: Date.now() + 180000,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchMatrix());
  }

  stopGame(e) {
    alert("Game over");
    this.setState({
      game_is_on: true,

      messageToUser: "",
      correct_words: [],
      attempted_words: [],
      total_score: 0,

      timer_start: Date.now() + 180000,
    });
  }
  restartGame(e) {
    e.preventDefault();

    if (confirm("Are you sure ?")) {
      const { dispatch } = this.props;
      this.setState({
        game_is_on: true,
        messageToUser: "",
        messageType: "",
        correct_words: [],
        attempted_words: [],
        total_score: 0,

        timer_start: Date.now() + 180000,
      });
      dispatch(fetchMatrix());
    }
  }
  componentDidUpdate() {
    const { validateData } = this.props;
    const { validword } = validateData;
    if (validword != "Good Luck!") {
      if (validword.length > 0) {
        let msg = "";
        let msg_type = "";
        if (validword.length === 2) {
          msg = "Nice";
          msg_type = "green";
        } else if (validword.length === 3) {
          msg = "Cool";
          msg_type = "green";
        } else {
          msg = "Awesome";
          msg_type = "green";
        }
        this.setState((prevState) => ({
          total_score: this.state.total_score + validword.length,
        }));

        // total score is sum of letters in all the words in the array
        // this.setState({
        //   total_score: this.state.correct_words.join("").length,
        // });
        // alert(response.data.test_res)
      } else {
        // this.setState({ messageToUser: "Wrong !", messageType: "red" });
      }
    }
  }

  handleSubmit(word) {
    const { dispatch } = this.props;

    dispatch(validateWord(word, this.props.matrixData.currentMatrix));
  }

  render() {
    const { matrixData, validateData } = this.props;

    const { currentMatrix } = matrixData;
    const { validword } = validateData;

    return (
      <div>
        <h1>{validword.length > 0 ? "Correct!" : "Incorrect!"}</h1>
        <Cells matrix={currentMatrix} />

        <Picker onSubmit={this.handleSubmit} />
        <Countdown
          onComplete={this.stopGame.bind(this)}
          date={this.state.timer_start}
          renderer={timer}
        />
        <div onClick={this.restartGame.bind(this)}>Restart</div>

        <label>{this.state.messageToUser}</label>

        <div>
          Total Score: <div>{this.state.total_score}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { matrixData, validateData } = state;
  return {
    matrixData,
    validateData,
  };
}

export default connect(mapStateToProps)(App);
