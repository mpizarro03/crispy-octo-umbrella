import axios from "axios";
export const GET_SERIES_VIDEO_REQUEST_SUCCESS =
  "GET_SERIES_VIDEO_REQUEST_SUCCESS";
export const GET_SERIES_VIDEO_REQUEST_FAILURE =
  "GET_SERIES_VIDEO_REQUEST_FAILURE";

export const getSeriesVideoRequest = id => {
  const seriedId = id;
  return async dispatch => {
    try {
      const seriesVideoRequest = await axios.get(
        `http://localhost:9001/series-videos?id=${seriedId}`
      );
      dispatch({
        type: GET_SERIES_VIDEO_REQUEST_SUCCESS,
        payload: seriesVideoRequest.data
      });
    } catch (error) {
      dispatch({
        type: GET_SERIES_VIDEO_REQUEST_FAILURE,
        payload: error
      });
    }
  };
};
