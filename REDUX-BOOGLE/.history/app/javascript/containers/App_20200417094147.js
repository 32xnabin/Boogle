import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchMatrix, validateWord } from "../actions";
import Picker from "../components/Picker";

import Cells from "./Cells";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchMatrix());
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
