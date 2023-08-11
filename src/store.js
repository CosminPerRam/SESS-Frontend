import { createStore } from 'redux'
import { combineReducers } from 'redux';
import contextMenuReducer from './redux/contextMenu/slice';
import { composeWithDevTools } from 'redux-devtools-extension';
import windowReducer from './redux/window/slice.js'

const rootReducer = combineReducers({
    contextMenu: contextMenuReducer,
    window: windowReducer
});

const store = createStore(rootReducer, composeWithDevTools());
export default store