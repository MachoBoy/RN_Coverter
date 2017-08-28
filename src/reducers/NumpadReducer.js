import {
    NUMBER_CHANGE,
    NUMBER_CLEAR,
    NUMBER_ERASE
} from '../actions/types';

const MAX_LENGTH = 9;

const INITIAL_STATE = {
    digit: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NUMBER_CHANGE:
            return { ...state, digit: state.digit.length < MAX_LENGTH && state.digit + action.payload };
        case NUMBER_CLEAR:
            return INITIAL_STATE;
        case NUMBER_ERASE:
            return { ...state, digit: state.digit.slice(0, state.digit.length-1) };
        default:
            return state;
    }
};