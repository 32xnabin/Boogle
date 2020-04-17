import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { selectUser, fetchUserAndRepos, fetchMatrix } from "../actions";
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

    // axios
    //   .get("/get_board_letters.json")
    //   .then((response) => {
    //     this.setState({ board_letters: response.data.data });
    //   })
    //   .catch((response) => {
    //     console.log(response);
    //   });
  }

  handleSubmit(user) {
    const { dispatch } = this.props;
    dispatch(selectUser(user));
    dispatch(fetchUserAndRepos(user));
    dispatch(fetchMatrix());
  }

  render() {
    const { currentUser, currentUserData, userRepos, matrixData } = this.props;
    const { userData } = currentUserData;
    const { currentmatrix } = matrixData;

    return (
      <div>
        <h1>{currentmatrix.length}</h1>
        <Cells matrix={currentmatrix} />
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
  const { currentUser, currentUserData, userRepos, matrix } = state;
  return {
    currentUser,
    currentUserData,
    userRepos,
    matrixData,
  };
}

export default connect(mapStateToProps)(App);
