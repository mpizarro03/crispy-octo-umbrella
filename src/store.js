import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import seriesData from "./reducers/index";
import logger from "redux-logger";

const rootReducer = combineReducers({
  seriesData
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(applyMiddleware(logger, thunk));

export default () => createStore(rootReducer, enhancer);
