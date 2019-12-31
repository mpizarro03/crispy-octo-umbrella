import React from "react";
import PropTypes from "prop-types";

function Loading({ processing, error }) {
  return (
    <div>
      {processing && <div style={{ color: "red " }}>Not Found</div>}
      {error && <div style={{ color: "red " }}>Not Found</div>}
    </div>
  );
}

Loading.defaultProps = {
  processing: false,
  loaded: false,
  error: false
};

Loading.propTypes = {
  processing: PropTypes.bool,
  loaded: PropTypes.bool,
  error: PropTypes.bool
};

export default React.memo(Loading);
