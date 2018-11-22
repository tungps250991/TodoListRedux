import * as types from '../Constants/actionType';
import data from '../Models/TaskModel/TasksData';

const jsonTasks = JSON.parse(localStorage.getItem('tasks'));
const initState = jsonTasks ? jsonTasks : [];

const reducer = (state = initState, action) => {
    let jsonTasks = JSON.parse(localStorage.getItem('tasks'));
    switch (action.type) {
        case types.INITIALIZE_TASKS:
            localStorage.setItem('tasks', JSON.stringify(data));
            return state;
        case types.LIST_ALL:
            return jsonTasks;

        default:
            return state;
    }
}

export default reducer;