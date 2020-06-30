import { shallow, mount, render } from "enzyme";
import Card from "./index";
import React from "react";

describe("Testing Card Component", () => {
  test("expect to render Card Compoent", () => {
    expect(shallow(<Card />).length).toBe(1);
    expect(shallow(<Card />).debug()).toMatchSnapshot();
  });
});
