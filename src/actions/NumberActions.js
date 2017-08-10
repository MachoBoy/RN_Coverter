import { 
    NUMBER_CHANGE,
    NUMBER_CLEAR,
    NUMBER_ERASE
} from './types';

export const numberChange = (digit) => {
    return {
        type: NUMBER_CHANGE,
        payload: digit
    };
};

export const numberClear = () => {
    return {
        type: NUMBER_CLEAR,
    };
};

export const numberErase = () => {
    return {
        type: NUMBER_ERASE,
    };
};