import React, { Component } from "react";

import CardList from "../CardList";
import SearchBox from "../SearchBox";
import Scroll from "../Scroll";
import ErrorBoundary from "../ErrorBoundary";
import Header from "../Header";
import { IRobo } from "redux/interfaces";

interface IMainPageProps {
  getRobos: () => void;
  robots: IRobo[];
  searchField: string;
  onSearchChanged: (event: React.SyntheticEvent) => void;
  isPending: boolean;
}
export class MainPage extends Component<IMainPageProps, {}> {
  componentDidMount() {
    this.props.getRobos();
  }

  filterRobots = () => {
    const { robots, searchField } = this.props;
    return robots!.filter((robot) => {
      return robot.name!.toLowerCase().includes(searchField.toLowerCase());
    });
  };

  render() {
    const { onSearchChanged, isPending } = this.props;

    return (
      <div className="tc">
        <Header />
        <SearchBox onSearchInputChange={onSearchChanged} />
        <Scroll>
          {isPending ? (
            <h1>Loading</h1>
          ) : (
              <ErrorBoundary>
                <CardList robos={this.filterRobots()} />
              </ErrorBoundary>
            )}
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
