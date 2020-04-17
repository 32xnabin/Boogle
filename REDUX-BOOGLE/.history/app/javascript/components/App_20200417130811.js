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
      count: 0,

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
      count: 0,

      timer_start: Date.now() + 180000,
    });
  }
  restartGame(e) {
    e.preventDefault();

    if (confirm("Are you sure ?")) {
      location.reload();
    }
  }

  componentWillUpdate() {
    const { validateData } = this.props;
    const { validword } = validateData;
    const { score } = this.props;
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
        // this.setState({
        //   total_score: score + validword.length,
        // });

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
    const { matrixData, validateData, total_score } = this.props;

    const { currentMatrix } = matrixData;
    const { validword } = validateData;
    const { count } = validateData;
    const { isFetching } = validateData;

    return (
      <table width="25%" cellSpacing="20" style={{ margin: "auto" }}>
        <tbody>
          <tr>
            <td>
              <h3>
                {validword != "Good Luck!"
                  ? validword.length > 0
                    ? "Correct!"
                    : "Incorrect!"
                  : "Good Luck!"}
              </h3>
            </td>
          </tr>
          <tr>
            <td>
              <Cells matrix={currentMatrix} />
            </td>
          </tr>
          <tr>
            <td colSpan="2" style={{ padding: "20px 0px" }}>
              <Picker onSubmit={this.handleSubmit} />
            </td>
          </tr>
          <tr>
            <td colSpan="2" style={{ padding: "20px 0px" }}>
              {isFetching ? <h4>"Checking......." </h4> : <br />}
            </td>
          </tr>
          <tr>
            <td style={{ padding: "2px", textAlign: "center" }}>
              {"Remaining Time: "}
              <Countdown
                onComplete={this.stopGame.bind(this)}
                date={this.state.timer_start}
                renderer={timer}
              />
            </td>
          </tr>
          <tr>
            <td style={{ padding: "20px 0px" }}>
              <h4>Total Score: {count}</h4>
              <div
                style={{
                  background: "#eee",
                  border: "1px solid #000",
                  textAlign: "center",
                }}
                onClick={this.restartGame.bind(this)}
              >
                Restart
              </div>
            </td>
          </tr>
        </tbody>
      </table>
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
