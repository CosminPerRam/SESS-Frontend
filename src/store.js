import { createStore } from "redux";
import { combineReducers } from "redux";
import contextMenuReducer from "./redux/contextMenu/slice";
import { composeWithDevTools } from "redux-devtools-extension";
import windowReducer from "./redux/window/slice.js";
import filtersReducer from "./redux/filters/slice";
import localFiltersReducer from "./redux/localFilters/slice";
import layoutReducer from "./redux/layout/slice";

const rootReducer = combineReducers({
  contextMenu: contextMenuReducer,
  window: windowReducer,
  filters: filtersReducer,
  localFilters: localFiltersReducer,
  layout: layoutReducer,
});

const store = createStore(rootReducer, composeWithDevTools());
export default store;
