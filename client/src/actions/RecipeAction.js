import axios from 'axios';

export function getRecipe() {
    return dispatch => {

        return axios.get('/api/add-recipe').then(response => {
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
export function getRecipeEdit(id) {
    return dispatch => {

        return axios.get(`/api/edit-recipe/${id}`).then(response => {
                dispatch({
                    type: 'EDIT_RECIPE_DATA',
                    payload: response.data || {}
                });
            })
            .catch(error => {
                dispatch({
                    type: 'EDIT_RECIPE_DATA',
                    payload: error,
                    error: true
                });
            });
    };
}

export function addRecipe(data) {
    return dispatch => {
        return axios.post('/api/add-recipe', data).then(response => {
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
export function editRecipe(id, data) {
    return dispatch => {
        return axios.put(`/api/add-recipe/${id}`, data).then(response => {
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

export function removeRecipe(id) {
    return dispatch => {
        return axios.delete(`/api/delete-recipe/${id}`).then(response => {
                dispatch({
                    type: 'DELETE_RECIPE_DATA',
                    payload: response.data || {}
                });
            })
            .catch(error => {
                dispatch({
                    type: 'DELETE_RECIPE_DATA',
                    payload: error,
                    error: true
                });
            });
    };
}