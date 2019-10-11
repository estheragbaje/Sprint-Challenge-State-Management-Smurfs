import * as types from "./actionTypes";

const initialState = {
  data: [],
  error: "",
  isLoading: false
};

export function smurfsReducers(state = initialState, action) {
  switch (action.type) {
    case types.IS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case types.GET_DATA:
      return {
        ...state,
        data: action.payload
      };
    case types.ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
