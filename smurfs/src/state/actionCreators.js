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

export async function submitToServer(data) {
  try {
    let response = await fetch("http://localhost:3333/smurfs", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });

    let responseJson = await response.json();
    debugger;
    return responseJson.movies;
  } catch (error) {
    console.error(error);
  }
}

export function error(err) {
  return { type: types.ERROR, payload: err };
}

export function isLoading() {
  return { type: types.IS_LOADING };
}
