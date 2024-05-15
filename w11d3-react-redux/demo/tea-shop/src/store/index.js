import { createStore, combineReducers } from 'redux';

import teaReducer from './teaReducer';

// const dummyReducer = (state, action) => (state);

const rootReducer = combineReducers({
    teas: teaReducer
});

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState);
}

export default configureStore;
