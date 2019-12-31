import SearchBar from "./SearchBar";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSeriesVideoRequest } from "../../actions/index";

const mapStateToProps = state => {
  return {
    seriesData: state.seriesData
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getSeriesVideoRequest }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
