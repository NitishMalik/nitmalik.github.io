import {
  SEARCH_CHANGED,
  GET_ROBOS_PENDING,
  GET_ROBOS_SUCCESS,
  GET_ROBOS_REJECT,
} from "./constants";

import * as actions from "./actions";

import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

const mockStore = configureMockStore([thunkMiddleware]);

test("should request robos API", () => {
  const store = mockStore();
  store.dispatch(actions.getRobos());
  const storeActions = store.getActions();
  console.log(storeActions);
  const expectedAction = {
    type: GET_ROBOS_PENDING,
  };
  expect(storeActions[0]).toEqual(expectedAction);
});
