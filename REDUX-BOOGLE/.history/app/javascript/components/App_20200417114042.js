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
      timer_start: Date.now() + 180000,
      messageToUser: "",
      attempted_words: [],
      total_score: 0,
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

        attempted_words: [],
        total_score: 0,

        timer_start: Date.now() + 180000,
      });
      dispatch(fetchMatrix());
    }
  }
  componentDidUpdate(prevProps) {
    alert("upadated..");
    // if (prevProps.value !== this.props.value) {
    //   alert(prevProps.value);
    // }
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
        <h1>{validword}</h1>
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
