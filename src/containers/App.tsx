import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { searchChanged, getRobos } from "../redux/actions";
import MainPage from "../components/MainPage";
import { IRobo } from "redux/interfaces";

// import AsyncComponent from "../components/AsyncComponent";

// const MessageLazy = React.lazy(() => import("../components/Message"));
interface IAppMapStateToProps {
  searchField: string;
  robots: IRobo[],
  isPending: boolean,
  error: string,
}

interface IAppMapDispatchToProps {
  onSearchChanged: (event: React.SyntheticEvent) => void;
  getRobos: () => void;
}

interface IAppProps extends IAppMapStateToProps, IAppMapDispatchToProps {
  className?: string;
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
