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

      timer_start: Date.now() + 10000,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchMatrix());
  }

  stopGame(e) {
    const { validateData } = this.props;

    const { count } = validateData;
    alert("Game over ! TOTAL SCORE :" + count);
    location.reload();
  }
  restartGame(e) {
    e.preventDefault();

    if (confirm("Are you sure ?")) {
      location.reload();
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
    const { count } = validateData;
    const { isFetching } = validateData;

    return (
      <table width="25%" cellSpacing="20" style={{ margin: "auto" }}>
        <tbody>
          <tr>
            <td style={{ padding: "2px", textAlign: "center" }}>
              {validword != "Good Luck!" ? (
                validword.length > 0 ? (
                  <h3 style={{ color: "#4CAF50" }}>CORRECT!</h3>
                ) : (
                  <h3 style={{ color: "#ff0000" }}>INCORRECT!</h3>
                )
              ) : (
                <h3 style={{ color: "#000" }}>GOOD LUCK!</h3>
              )}
            </td>
          </tr>
          <tr>
            <td>
              <Cells matrix={currentMatrix} />
            </td>
          </tr>
          <tr>
            <td style={{ padding: "20px 0px", textAlign: "center" }}>
              <Picker onSubmit={this.handleSubmit} />
            </td>
          </tr>
          <tr>
            <td colSpan="2" style={{ padding: "20px 0px" }}>
              {isFetching ? "Checking......." : <br />}
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
            <td style={{ padding: "20px 0px", textAlign: "center" }}>
              <h4>Total Score: {count}</h4>
              <div
                style={{
                  background: "#eee",
                  border: "1px solid #000",
                  padding: "10px 20px",
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
