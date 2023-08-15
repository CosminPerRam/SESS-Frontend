import { createStore } from 'redux';
import { combineReducers } from 'redux';
import contextMenuReducer from './redux/contextMenu/slice';
import { composeWithDevTools } from 'redux-devtools-extension';
import windowReducer from './redux/window/slice.js';
import filtersReducer from './redux/filters/slice';
import localFiltersReducer from './redux/localFilters/slice'

const rootReducer = combineReducers({
  contextMenu: contextMenuReducer, 
	window: windowReducer,
	filters: filtersReducer,
	localFilters: localFiltersReducer
});

const store = createStore(rootReducer, composeWithDevTools());
export default store;
