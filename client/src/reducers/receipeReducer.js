export default (state = {}, action) => {
    // here we are receiving data from action
    switch (action.type) {
        case 'LOAD_RECEIPE_DATA':
            if (!action.error) {
                return  { ...state, data: action.payload };
            }
            break;
        default:
    }
    return state;
};
