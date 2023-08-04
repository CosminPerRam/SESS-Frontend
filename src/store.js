import { createStore } from 'redux'
import { combineReducers } from 'redux';
import contextMenuReducer from './redux/contextMenu/slice';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    contextMenu: contextMenuReducer,
});

const store = createStore(rootReducer, composeWithDevTools());
export default store