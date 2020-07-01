import { shallow } from "enzyme";
import React from "react";
import CardList from "./";
//import toJson from "enzyme-to-json";

test("should render CardList component", () => {
  const mockRobos = [
    {
      id: 1,
      name: "John Snow",
      email: "john@gmail.com",
    },
  ];
  expect(shallow(<CardList robos={mockRobos} />).debug()).toMatchSnapshot();
});
