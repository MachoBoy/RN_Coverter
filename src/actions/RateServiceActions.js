import axios from 'axios';
import { 
    FETCH_RATE_SERVICE,
} from './types';

const RATE_URL = 'https://api.fixer.io/latest?base=CAD';

export function fetchRateService() {
    return function(dispatch) {
        axios.get(RATE_URL)
            .then(response => {
                dispatch({
                    type: FETCH_RATE_SERVICE,
                    payload: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }
}



