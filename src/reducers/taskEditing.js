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
    switch (action.type) {
        case types.GET_TASK_EDITING:
            return action.taskEditing;
        default:
            return state;
    }
}

export default reducer;