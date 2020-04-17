import { combineReducers } from "redux";
import {
  REQUEST_MATRIX,
  RECEIVE_MATRIX,
  RECEIVE_MATRIX_ERROR,
  REQUEST_VALIDATE,
  RECEIVE_VALIDATE,
  RECEIVE_VALIDATE_ERROR,
} from "./ActionTypes";

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
    validword: "Good Luck!",
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
  matrixData,
  validateData,
});

export default rootReducer;
