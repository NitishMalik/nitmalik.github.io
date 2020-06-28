import React, { Component, Suspense } from "react";
import "./App.css";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import CardList from "../components/CardList";
import { connect } from "react-redux";
import { searchChanged, getRobos } from "../redux/actions";
import Header from "../components/Header";
// import AsyncComponent from "../components/AsyncComponent";

const MessageLazy = React.lazy(() => import("../components/Message"));
class App extends Component {
  state = {
    //robos: [],
  };

  componentDidMount() {
    this.props.getRobos();
  }

  // onInputChange = (event) => {
  //   this.setState({ searchInput: event.target.value });
  // };

  render() {
    // const { robos } = this.state;
    const {
      searchField,
      onSearchChanged,
      robos,
      isPending,
      error,
    } = this.props;
    const filteredRobos = robos.filter((r) =>
      r.name.toLowerCase().includes(searchField.toLowerCase())
    );

    if (error) {
      return <div> Something went wrong.. </div>;
    }

    return isPending ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <Header />
        <SearchBox onSearchInputChange={onSearchChanged} />
        <Scroll>
          <CardList robos={filteredRobos} />
        </Scroll>
        <Suspense fallback={<div> Loading...</div>}>
          <MessageLazy />
        </Suspense>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchField: state.search.searchField,
    robos: state.robo.robos,
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
