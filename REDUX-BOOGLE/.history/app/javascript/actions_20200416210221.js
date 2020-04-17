import {
  SELECT_USER,
  REQUEST_USERDATA,
  RECEIVE_USERDATA,
  RECEIVE_USERDATA_ERROR,
  REQUEST_REPOS,
  RECEIVE_REPOS,
  RECEIVE_REPOS_ERROR,
  RECEIVE_MATRIX,
  REQUEST_MATRIX,
  RECEIVE_MATRIX_ERROR,
  REQUEST_VALIDATE,
  RECEIVE_VALIDATE,
} from "./constants/ActionTypes";
import axios from "axios";

export function selectUser(user) {
  return {
    type: SELECT_USER,
    user,
  };
}

export function requestUserData() {
  return {
    type: REQUEST_USERDATA,
  };
}

function receiveUserData(json) {
  return {
    type: RECEIVE_USERDATA,
    userData: json,
  };
}

function receiveUserDataErr(error) {
  return {
    type: RECEIVE_USERDATA_ERROR,
    error,
  };
}

function requestRepos() {
  return {
    type: REQUEST_REPOS,
  };
}

function receiveRepos(json) {
  return {
    type: RECEIVE_REPOS,
    repos: json,
  };
}

function receiveReposErr(error) {
  return {
    type: RECEIVE_REPOS_ERROR,
    error,
  };
}

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
    validword: json.data,
  };
}

function receiveValidateErr(error) {
  return {
    type: RECEIVE_VALIDATE_ERROR,
    error,
  };
}

export function fetchUserData(user) {
  return (dispatch) => {
    dispatch(requestUserData());
    return fetch(`https://api.github.com/users/${user}`)
      .then((res) => res.json())
      .then((json) => dispatch(receiveUserData(json)))
      .catch((err) => dispatch(receiveUserDataErr(err)));
  };
}

function fetchRepos(user) {
  return (dispatch) => {
    dispatch(requestRepos());
    return fetch(`https://api.github.com/users/${user}/repos`)
      .then((res) => res.json())
      .then((json) => dispatch(receiveRepos(json)))
      .catch((err) => dispatch(receiveReposErr(err)));
  };
}

export function fetchUserAndRepos(user) {
  return (dispatch, getState) => {
    return dispatch(fetchUserData(user)).then(() => {
      const { currentUserData } = getState();
      if (!currentUserData.isFetching && currentUserData.userData.message) {
        return;
      }
      return dispatch(fetchRepos(user));
    });
  };
}

export function fetchMatrix() {
  return (dispatch) => {
    dispatch(requestMatrix());
    return fetch(`http://localhost:3000/get_board_letters.json`)
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
      .post(`http://localhost:3000/submit_word`, {
        word: word,
        board_letters: currentMatrix,
      })
      .then((res) => res.json())
      .then((json) => dispatch(receiveValidate(json)))
      .catch((err) => dispatch(receiveValidateErr(err)));
  };
}
