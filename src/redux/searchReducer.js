import { SEARCH_CHANGED } from "./constants";

const initialState = {
  searchField: "",
};

export function SearchReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SEARCH_CHANGED:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
}
