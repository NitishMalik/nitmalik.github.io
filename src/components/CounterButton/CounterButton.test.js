import { shallow } from "enzyme";
import React from "react";
import CounterButton from "./";

test("should increment count on click", () => {
  const mockProp = { color: "red" };
  const wrapper = shallow(<CounterButton {...mockProp} />);

  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 1 });
  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 2 });
  expect(wrapper.props().color).toEqual("red");
});
