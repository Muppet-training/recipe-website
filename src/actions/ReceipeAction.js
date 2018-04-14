
export function getReceipe() {
    return dispatch => {
        return dispatch ({type: 'LOAD_RECEIPE_DATA', payload: {
            title: 'burger meet',
            receipe: 'meet',
            ingrediants: 'chicken',
        }}) ;
    }
}