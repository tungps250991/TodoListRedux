import * as types from '../Constants/actionType';

const initState = {
    id: '',
    name: '',
    labelArr: [],
    priority: null,
    memberIDArr: [],
    status: 2,
    description: ''
}

const reducer = (state = initState, action) => {
    if (action.type === types.EDIT_TASK) {
        return action.taskEditing;
    }
    return state;
}

export default reducer;