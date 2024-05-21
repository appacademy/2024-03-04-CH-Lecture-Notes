import { csrfFetch } from "./csrf";

// ACTION TYPES
const RECEIVE_USER = 'user/RECEIVE_USER';
const REMOVE_USER = 'user/REMOVE_USER';

// ACTION Creators
export const receiveUser = user => ({
    type: RECEIVE_USER,
    payload: user
});

export const removeUser = userId => ({
    type: REMOVE_USER,
    userId
});

// Thunk action creators
export const loginUser = user => async dispatch => {
    let res = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify(user)
    });
    let data = await res.json();
    sessionStorage.setItem('currentUser', JSON.stringify(data.user));
    dispatch(receiveUser(data.user));
}


export const logoutUser = userId => async dispatch => {
    let res = await csrfFetch('/api/session', {
        method: 'DELETE'
    });
    sessionStorage.setItem('currentUser', null);
    dispatch(removeUser(userId));
}

export const createUser = user => async dispatch => {
    let res = await csrfFetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(user)
    });
    let data = await res.json();
    sessionStorage.setItem('currentUser', JSON.stringify(data.user));
    dispatch(receiveUser(data.user));
}



// Reducer
const usersReducer = (state={}, action) => {
    const nextState = {...state};
    switch(action.type) {
        case RECEIVE_USER:
            nextState[action.payload.id] = action.payload;
            return nextState;
        case REMOVE_USER:
            delete nextState[action.userId];
            return nextState;
        default:
            return state;
    }
}

export default usersReducer;
