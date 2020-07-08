import React, { Component } from "react";

interface IErrorBState {
  hasError: boolean;
}
class ErrorBoundary extends Component<{}, IErrorBState> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const errorText = <h1> Something went wrong </h1>;
    {
      return hasError ? errorText : this.props.children;
    }
  }
}

export default ErrorBoundary;
