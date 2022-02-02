import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { filmReducer } from "./films.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  filmReducer,
  composeEnhancers(applyMiddleware(thunk))
);
