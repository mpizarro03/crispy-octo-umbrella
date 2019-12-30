import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSeriesVideoRequest } from "./actions/index";

class App extends Component {
  async componentDidMount() {
    this.props.getSeriesVideoRequest(122881);
  }
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="app__main-heading">{`Hello!  This is the <App /> component!  Please render your UI in .app__body below`}</h1>
        </header>
        <div className="app__body">{/* TODO: render UI here */}</div>
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
