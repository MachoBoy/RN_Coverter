import { combineReducers } from 'redux';
import NumpadReducer from './NumpadReducer';
import RateServiceReducer from './RateServiceReducer';

export default combineReducers({
    numberPad: NumpadReducer,
    rateService: RateServiceReducer
});