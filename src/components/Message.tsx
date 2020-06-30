import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);
    console.log("Message Constructor");
  }

  componentDidMount() {
    console.log("Message Did mount");
  }
  componentWillUnmount() {
    console.log("Messge Unmounted");
  }

  render() {
    return <p> Using AsynComponent </p>;
  }
}

export default Message;
