export default (state = {}, action) => {
    // here we are receiving data from action
    switch (action.type) {
        case 'LOAD_RECIPE_DATA':
            if (!action.error) {
                return  { ...state, data: action.payload };
            }
            break;
        case 'EDIT_RECIPE_DATA':
            if (!action.error) {
                return  { ...state, data: action.payload };
            }
            break;
        case 'ADD_RECIPE_DATA':
            if (!action.error) {
                return  { ...state, successMsg: action.payload };
            }
            break;
        case 'DELETE_RECIPE_DATA':
            if (!action.error) {
                return  { ...state, deleteMsg: action.payload };
            }
            break;
        default:
    }
    return state;
};
