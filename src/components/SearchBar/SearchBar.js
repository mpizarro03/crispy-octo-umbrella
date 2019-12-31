import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SearchBar.css";

function SearchBar({ getSeriesVideoRequest }) {
  const [seriesId, setSeriesId] = useState();

  const isValid = () => {
    const valid = seriesId && seriesId.length;
    return valid;
  };

  const handleInputChange = event => {
    const inputValue = event.target.value;
    setSeriesId(inputValue);
  };

  const handleSubmit = e => {
    e.preventDefault();

    getSeriesVideoRequest(seriesId);
  };

  return (
    <form className="searchBar" onSubmit={handleSubmit}>
      <div className="row">
        <label className="col">
          <div> Series Id:</div>
          <input name="seriesId" type="number" onChange={handleInputChange} />
        </label>
        <button disabled={!isValid()} className="searchBar__button col">
          GET SERIES DATA
        </button>
      </div>
    </form>
  );
}

SearchBar.defaultProps = {
  className: ""
};

SearchBar.propTypes = {
  className: PropTypes.string,
  seriesId: PropTypes.number
};

export default React.memo(SearchBar);
