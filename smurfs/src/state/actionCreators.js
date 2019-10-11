import * as types from "./actionTypes";
import axios from "axios";

export const getData = () => dispatch => {
  dispatch({ type: types.IS_LOADING });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({ type: types.GET_DATA, payload: res.data });
    })
    .catch(err => {
      dispatch(error(err));
    });
};

export function error(err) {
  return { type: types.ERROR, payload: err };
}

export function isLoading() {
  return { type: types.IS_LOADING };
}
