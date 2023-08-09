import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

import { todoReducer } from '../redux/reducers/todo.reducer';

const rootReducers = combineReducers({ todoReducer });
export const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
