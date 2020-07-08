import React, { Component } from "react";
import CounterButton from "./CounterButton";

class Header extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <>
        <h1 className="f1">ROBO FRIENDS</h1>
        <CounterButton />
      </>
    );
  }
}

export default Header;
