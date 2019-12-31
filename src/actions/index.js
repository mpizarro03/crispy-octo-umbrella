import axios from "axios";
export const SERIES_VIDEO_REQUEST = "SERIES_VIDEO_REQUEST";
export const SERIES_VIDEO_REQUEST_SUCCESS = "SERIES_VIDEO_REQUEST_SUCCESS";
export const SERIES_VIDEO_REQUEST_FAILURE = "SERIES_VIDEO_REQUEST_FAILURE";

export const getSeriesVideoRequest = id => {
  const seriesId = id;
  return async dispatch => {
    dispatch({ type: SERIES_VIDEO_REQUEST });
    try {
      const seriesVideoRequest = await axios.get(
        `http://localhost:9001/series-videos?id=${seriesId}`
      );
      dispatch({
        type: SERIES_VIDEO_REQUEST_SUCCESS,
        payload: seriesVideoRequest.data
      });
    } catch (error) {
      dispatch({
        type: SERIES_VIDEO_REQUEST_FAILURE,
        error: error
      });
    }
  };
};
