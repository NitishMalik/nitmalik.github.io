import { shallow } from "enzyme";
import React from "react";
import MainPage from "./";

let wrapper;
beforeEach(() => {
  const mockProps = {
    searchField: "",
    robots: [],
    isPending: false,
    error: "",
    getRobos: jest.fn(),
  };

  wrapper = shallow(<MainPage {...mockProps} />);
});

test("render without crashing", () => {
  expect(wrapper.debug()).toMatchSnapshot();
});

test("filter Robots correctly", () => {
  const mockProps2 = {
    getRobos: jest.fn(),
    robots: [
      {
        id: 2,
        name: "John",
        email: "John@gmail.com",
      },
    ],
    searchField: "a",
    isPending: false,
  };
  const filtered = [];
  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filterRobots()).toEqual(filtered);
});
