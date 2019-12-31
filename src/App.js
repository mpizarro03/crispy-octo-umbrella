import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./App.css";
import { getSeriesVideoRequest } from "./actions/index";
//components
import SearchBar from "./components/SearchBar";
import InfoDisplayCard from "./components/Card/Card";
import Loading from "./components/Loading/Loading";

class App extends Component {
  render() {
    const { seriesData } = this.props;
    const seriesProcessing = seriesData && seriesData.isLoading === true;
    const seriesLoaded =
      seriesData &&
      seriesData.isLoading === false &&
      seriesData.seriesHeroArt &&
      seriesData.seriesTitle;
    const seriesError =
      seriesData &&
      seriesData.error &&
      seriesData.isLoading === false &&
      seriesData.error.isAxiosError;
    return (
      <div className="app container">
        <header className="app__header row">
          <h1>{`Hello!  This is the <App /> component!  Please render your UI in .app__body below`}</h1>
        </header>

        <div className="app__body row">
          <SearchBar />
        </div>
        <div className="app__body row">
          <Loading
            data={seriesData}
            processing={seriesProcessing}
            loaded={seriesLoaded}
            error={seriesError}
          />
        </div>
        <div>{seriesLoaded && <InfoDisplayCard series={seriesData} />}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    seriesData: state.seriesData
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getSeriesVideoRequest }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
