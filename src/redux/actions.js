import {
  SEARCH_CHANGED,
  GET_ROBOS_PENDING,
  GET_ROBOS_SUCCESS,
  GET_ROBOS_REJECT,
} from "./constants";

export const searchChanged = (input) => {
  return {
    type: SEARCH_CHANGED,
    payload: input,
  };
};

export const getRobos = () => (dispatch) => {
  dispatch({ type: GET_ROBOS_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((resp) => resp.json())
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
