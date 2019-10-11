import * as types from "./actionTypes";

const initialState = {
  data: [],
  error: "",
  isLoading: false
};

export function smurfsReducer(state = initialState, action) {
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
    case types.UPDATE_DATA:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
