import React, { Component } from "react";

interface IAsyncCompState {
  component?: React.ComponentClass | React.SFC | null;
}
export default function AsyncComponent(importComponent) {
  class AsyncComponent extends Component<{}, IAsyncCompState> {
    constructor(props) {
      super(props);
      this.state = {
        component: null,
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({ component });
    }

    render() {
      const Component = this.state.component;
      return Component ? <Component {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}
