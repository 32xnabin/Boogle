import {
  RECEIVE_MATRIX,
  REQUEST_MATRIX,
  RECEIVE_MATRIX_ERROR,
  REQUEST_VALIDATE,
  RECEIVE_VALIDATE,
  RECEIVE_VALIDATE_ERROR,
} from "./ActionTypes";
import axios from "axios";

function requestMatrix() {
  return {
    type: REQUEST_MATRIX,
  };
}

function receiveMatrix(json) {
  console.log(json);
  return {
    type: RECEIVE_MATRIX,
    matrix: json.data,
  };
}

function receiveMatrixErr(error) {
  return {
    type: RECEIVE_MATRIX_ERROR,
    error,
  };
}

function requestValidate() {
  return {
    type: REQUEST_VALIDATE,
  };
}

function receiveValidate(json) {
  console.log(json);
  return {
    type: RECEIVE_VALIDATE,
    validword: json,
  };
}

function receiveValidateErr(error) {
  return {
    type: RECEIVE_VALIDATE_ERROR,
    error,
  };
}

export function fetchMatrix() {
  return (dispatch) => {
    dispatch(requestMatrix());
    return fetch(`http://localhost:3000/creatematrix`)
      .then((res) => res.json())
      .then((json) => dispatch(receiveMatrix(json)))
      .catch((err) => dispatch(receiveMatrixErr(err)));
  };
}

export function validateWord(word, currentMatrix) {
  console.log(word);
  console.log(currentMatrix);
  return (dispatch) => {
    dispatch(requestValidate());

    axios
      .post(`http://localhost:3000/validateword`, {
        word: word,
        current_matrix: currentMatrix,
      })
      .then((res) => dispatch(receiveValidate(res.data.result)))
      .catch((err) => dispatch(receiveValidateErr(err)));
  };
}
