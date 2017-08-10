import {
    FETCH_RATE_SERVICE,
} from '../actions/types';

const INITIAL_STATE = {
    rateInfo: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_RATE_SERVICE:
            return { ...state, rateInfo: [...state.rateInfo, action.payload.rates] }
        default:
            return state;
    }
};