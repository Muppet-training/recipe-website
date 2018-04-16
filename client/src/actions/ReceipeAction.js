import axios from 'axios';

export function getReceipe() {
    return dispatch => {
        // here we can get dev enviroment data from api same action for QA, UAT, PROD
        return axios.get('/api/users').then((response) => {
            
            dispatch({ type: 'LOAD_RECEIPE_DATA', payload: response.data || {} });
        })
            .catch((error) => {
                dispatch({ type: 'LOAD_RECEIPE_DATA', payload: error, error: true, });
            });
    }
}