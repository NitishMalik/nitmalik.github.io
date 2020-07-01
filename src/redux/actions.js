import {
  SEARCH_CHANGED,
  GET_ROBOS_PENDING,
  GET_ROBOS_SUCCESS,
  GET_ROBOS_REJECT,
} from "./constants";
import { apiCall } from "../api/api";

export const searchChanged = (input) => {
  return {
    type: SEARCH_CHANGED,
    payload: input,
  };
};

export const getRobos = () => (dispatch) => {
  dispatch({ type: GET_ROBOS_PENDING });
  apiCall("https://jsonplaceholder.typicode.com/users")
    .then((data) => {
      dispatch({ type: GET_ROBOS_SUCCESS, payload: data });
    })
    .catch((error) =>
      dispatch({
        type: GET_ROBOS_REJECT,
        payload: error,
      })
    );
};
