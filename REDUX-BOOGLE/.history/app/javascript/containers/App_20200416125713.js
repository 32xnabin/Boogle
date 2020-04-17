import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  selectUser,
  fetchUserAndRepos,
  fetchMatrix,
  validateWord,
} from "../actions";
import Picker from "../components/Picker";
import User from "../components/User";
import axios from "axios";
import Cells from "./Cells";

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   matrix: [],
    // };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchMatrix());
  }
  submitWord(e) {
    if (e.key === "Enter") {
      let submitted_word = e.target.value.trim();
      this.setState((prevState) => ({
        attempted_words: [...prevState.attempted_words, submitted_word],
      }));
      if (
        this.state.attempted_words.includes(submitted_word) ||
        submitted_word.length === 1
      ) {
        e.target.value = "";
        return false;
      }
      axios
        .post("http://localhost:3000/submit_word", {
          word: submitted_word,
          board_letters: this.state.currentMatrix,
        })
        .then((response) => {
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
            this.setState((prevState) => ({
              correct_words: [...prevState.correct_words, response.data.result],
              messageToUser: msg,
              messageType: msg_type,
            }));

            // total score is sum of letters in all the words in the array
            this.setState({
              total_score: this.state.correct_words.join("").length,
            });
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

  handleSubmit(word) {
    const { dispatch } = this.props;
    // dispatch(selectUser(user));
    // dispatch(fetchUserAndRepos(user));
    console.log(word);
    console.log(this.props.matrixData.currentMatrix);

    this.state = {
      word: word,
      currentMatrix: this.props.matrixData.currentMatrix,
    };

    validateWord();
  }

  render() {
    const {
      currentUser,
      currentUserData,
      userRepos,
      matrixData,
      validateData,
    } = this.props;
    const { userData } = currentUserData;
    const { currentMatrix } = matrixData;
    const { validword } = validateData;

    return (
      <div>
        <h1>{validword}</h1>
        <Cells matrix={currentMatrix} />
        <input
          placeholder="Enter text here"
          onKeyDown={this.submitWord.bind(this)}
        />
        <Picker onSubmit={this.handleSubmit} />
        {currentUserData.isFetching && <h2>Loading...</h2>}
        {!currentUserData.isFetching && userData.message && (
          <div>
            <h2>{userData.message}</h2>
            <p>{userData.documentation_url}</p>
          </div>
        )}
        {currentUser !== "" &&
          !userData.message &&
          !currentUserData.isFetching && (
            <User currentUserData={currentUserData} userRepos={userRepos} />
          )}
      </div>
    );
  }
}

App.propTypes = {
  currentUser: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const {
    currentUser,
    currentUserData,
    userRepos,
    matrixData,
    validateData,
  } = state;
  return {
    currentUser,
    currentUserData,
    userRepos,
    matrixData,
    validateData,
  };
}

export default connect(mapStateToProps)(App);
