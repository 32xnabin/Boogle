import { combineReducers } from "redux";
import {
  REQUEST_MATRIX,
  RECEIVE_MATRIX,
  RECEIVE_MATRIX_ERROR,
  REQUEST_VALIDATE,
  RECEIVE_VALIDATE,
  RECEIVE_VALIDATE_ERROR,
} from "./constants/ActionTypes";

export function currentUser(state = "", action) {
  switch (action.type) {
    case SELECT_USER:
      return action.user;
    default:
      return state;
  }
}

export function currentUserData(
  state = {
    isFetching: false,
    userData: {},
  },
  action
) {
  switch (action.type) {
    case REQUEST_USERDATA:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_USERDATA:
      return Object.assign({}, state, {
        isFetching: false,
        userData: action.userData,
      });
    case RECEIVE_USERDATA_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        userData: action.error,
      });
    default:
      return state;
  }
}

export function userRepos(
  state = {
    isFetching: false,
    repos: [],
  },
  action
) {
  switch (action.type) {
    case REQUEST_REPOS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_REPOS:
      return Object.assign({}, state, {
        isFetching: false,
        repos: action.repos,
      });
    case RECEIVE_REPOS_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        repos: action.error,
      });
    default:
      return state;
  }
}

export function matrixData(
  state = {
    isFetching: false,
    currentMatrix: [],
  },
  action
) {
  switch (action.type) {
    case REQUEST_MATRIX:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_MATRIX:
      return Object.assign({}, state, {
        isFetching: false,
        currentMatrix: action.matrix,
      });
    case RECEIVE_MATRIX_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        currentMatrix: action.error,
      });
    default:
      return state;
  }
}

export function validateData(
  state = {
    isFetching: false,
    validword: "",
  },
  action
) {
  switch (action.type) {
    case REQUEST_VALIDATE:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_VALIDATE:
      return Object.assign({}, state, {
        isFetching: false,
        validword: action.validword,
      });
    case RECEIVE_VALIDATE_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        validword: action.error,
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  currentUser,
  currentUserData,
  userRepos,
  matrixData,
  validateData,
});

export default rootReducer;
