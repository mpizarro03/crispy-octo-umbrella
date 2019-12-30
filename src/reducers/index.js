import {
  GET_SERIES_VIDEO_REQUEST_SUCCESS,
  GET_SERIES_VIDEO_REQUEST_FAILURE
} from "../actions/index";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SERIES_VIDEO_REQUEST_SUCCESS:
      return { ...state, ...action.payload };
    case GET_SERIES_VIDEO_REQUEST_FAILURE:
      return {
        error: action.payload.error
      };
    default:
      return state;
  }
};
