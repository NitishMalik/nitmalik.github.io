import {
  GET_ROBOS_PENDING,
  GET_ROBOS_SUCCESS,
  GET_ROBOS_REJECT,
} from "./constants";

export const initialState = {
  robos: [],
  isPending: false,
  error: "",
};

export function RoboReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_ROBOS_PENDING:
      return { ...state, isPending: true };
    case GET_ROBOS_SUCCESS:
      return { ...state, robos: action.payload, isPending: false };
    case GET_ROBOS_REJECT:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
}
