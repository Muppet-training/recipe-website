export default (state = {}, action) => {
    // here we are receiving data from action
    switch (action.type) {
        case 'LOAD_RECIPE_DATA':
            if (!action.error) {
                console.log('reducer lis', action.payload);
                return  { ...state, data: action.payload };
            }
            break;
        default:
    }
    return state;
};
