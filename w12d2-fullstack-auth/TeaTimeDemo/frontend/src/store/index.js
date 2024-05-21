import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';

import teaReducer from './teaReducer';
import usersReducer from './usersReducer';

// const dummyReducer = (state, action) => (state);

const rootReducer = combineReducers({
    teas: teaReducer,
    users: usersReducer
});

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));
}

export default configureStore;
