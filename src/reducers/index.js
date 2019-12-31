import {
  SERIES_VIDEO_REQUEST,
  SERIES_VIDEO_REQUEST_SUCCESS,
  SERIES_VIDEO_REQUEST_FAILURE
} from "../actions/index";

const initialState = { isLoading: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case SERIES_VIDEO_REQUEST:
      return { ...state, isLoading: true };
    case SERIES_VIDEO_REQUEST_SUCCESS:
      return { ...state, ...action.payload, isLoading: false, error: null };
    case SERIES_VIDEO_REQUEST_FAILURE:
      return {
        error: action.error,
        isLoading: false
      };

    default:
      return state;
  }
};
