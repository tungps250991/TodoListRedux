import * as types from '../Constants/actionType';

const initState = true;

const reducer = (state = initState, action) => {
    switch (action.type) {
        case types.CONVERT_ADD_TO_EDIT:
            return false;
        case types.CONVERT_EDIT_TO_ADD:
            return true;
        default:
            return state;
    }
}

export default reducer;