import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { api, winnersLosers } from './ducks';

const logger = createLogger({ diff: true, collapsed: true });

const reducer = combineReducers({
  [api.namespace]: api.reducer,
  [winnersLosers.namespace]: winnersLosers.reducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
