import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
