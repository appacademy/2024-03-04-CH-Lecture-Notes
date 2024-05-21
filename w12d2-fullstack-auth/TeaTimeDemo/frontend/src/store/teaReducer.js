import * as TeaAPIUtil from '../util/tea_api_util';

const RECEIVE_TEA = 'RECEIVE_TEA';
const RECEIVE_TEAS = 'RECEIVE_TEAS';
const REMOVE_TEA = 'REMOVE_TEA';

export const receiveTea = tea => {
    // debugger
    return {
        type: RECEIVE_TEA,
        tea: tea
    }
};

export const receiveTeas = teas => {
    // debugger
    return {
        type: RECEIVE_TEAS,
        teas
    }
};

export const removeTea = teaId => ({
    type: REMOVE_TEA,
    teaId
});

export const fetchAllTeas = () => async dispatch => {
    // debugger
    const res = await TeaAPIUtil.requestTeas();
    const data = await res.json();
    dispatch(receiveTeas(data));
};

export const createTea = tea => async dispatch => {
    // debugger
    const res = await TeaAPIUtil.postTea(tea);
    const data = await res.json();
    dispatch(receiveTea(data))
}

const teaReducer = (state = {}, action) => {
    Object.freeze(state);

    const nextState = { ...state }; 

    switch (action.type) {
        case RECEIVE_TEA:
            // debugger
            nextState[action.tea.id] = action.tea;
            return nextState;
        case RECEIVE_TEAS:
            // debugger
            return { ...nextState, ...action.teas };
        case REMOVE_TEA:
            delete nextState[action.teaId];
            return nextState;
        default:
            return state;
    }
};

export default teaReducer;