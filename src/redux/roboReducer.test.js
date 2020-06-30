import {
  GET_ROBOS_PENDING,
  GET_ROBOS_SUCCESS,
  GET_ROBOS_REJECT,
} from "./constants";

import { RoboReducer, initialState } from "./roboReducer";

describe("Robo reducer test suite", () => {
  test("should return default state", () => {
    expect(RoboReducer(initialState, {})).toEqual(initialState);
  });

  test("testing pending flag change", () => {
    expect(RoboReducer(initialState, { type: GET_ROBOS_PENDING })).toEqual({
      ...initialState,
      isPending: true,
    });
  });

  test("should change robo collection", () => {
    const payloadObj = {
      id: "123",
      name: "John",
      email: "John@gmail.com",
    };
    expect(
      RoboReducer(initialState, {
        type: GET_ROBOS_SUCCESS,
        payload: [payloadObj],
      })
    ).toEqual({
      ...initialState,
      robos: [payloadObj],
    });
  });
});
