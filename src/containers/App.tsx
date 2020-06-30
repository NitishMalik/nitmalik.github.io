import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { searchChanged, getRobos } from "../redux/actions";
import MainPage from "../components/MainPage";
// import AsyncComponent from "../components/AsyncComponent";

// const MessageLazy = React.lazy(() => import("../components/Message"));
interface IAppProps {
  getRobos: () => void;
}
class App extends Component<IAppProps, {}> {
  state = {
    //robos: [],
  };

  componentDidMount() {
    this.props.getRobos();
  }

  render() {
    return <MainPage {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    searchField: state.search.searchField,
    robots: state.robo.robos,
    isPending: state.robo.isPending,
    error: state.robo.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChanged: (event) => dispatch(searchChanged(event.target.value)),
    getRobos: () => dispatch(getRobos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
