import axios from 'axios';

export function getRecipe() {
    return dispatch => {

        return axios.get('/api/edit-recipe').then(response => {
                console.log('action.response:', response);
                dispatch({
                    type: 'LOAD_RECIPE_DATA',
                    payload: response.data || {}
                });
            })
            .catch(error => {
                dispatch({
                    type: 'LOAD_RECIPE_DATA',
                    payload: error,
                    error: true
                });
            });
    };
}

export function addRecipe(data) {
    console.log('Data: ', data);
    return dispatch => {
        return axios.post('/api/add-recipe').then(response => {
                console.log('action.response:', response);
                dispatch({
                    type: 'ADD_RECIPE_DATA',
                    payload: response.data || {}
                });
            })
            .catch(error => {
                dispatch({
                    type: 'ADD_RECIPE_DATA',
                    payload: error,
                    error: true
                });
            });
    };
}