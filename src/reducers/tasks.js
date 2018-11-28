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
        case types.ADD_TASK:
            action.task.priority = parseInt(action.task.priority);
            jsonTasks = [...jsonTasks, action.task];
            localStorage.setItem('tasks', JSON.stringify(jsonTasks));
            return jsonTasks;
        case types.EDIT_TASK:
            for (const key in jsonTasks) {
                if (jsonTasks[key].id === action.taskEditing.id) {
                    jsonTasks[key] = action.taskEditing;
                    jsonTasks[key].priority = parseInt(action.taskEditing.priority);
                    jsonTasks[key].status = parseInt(action.taskEditing.status);
                }
            }
            localStorage.setItem('tasks', JSON.stringify(jsonTasks));
            return jsonTasks;
        case types.EDIT_TASK_STATUS:
            for (const key in jsonTasks) {
                if (jsonTasks[key].id === action.id) {
                    jsonTasks[key].status = parseInt(action.status);
                }
            }
            localStorage.setItem('tasks', JSON.stringify(jsonTasks));
            return jsonTasks;
        case types.FILTER_STATUS:
            jsonTasks = jsonTasks.filter((task) => {
                if (task.status === action.filter || action.filter === -1) {
                    return true;
                }
                return false;
            })
            return jsonTasks;
        case types.FILTER_PRIORTY:
            jsonTasks = jsonTasks.filter((task) => {
                if (task.priority === parseInt(action.filter) || parseInt(action.filter) === -1) {
                    return true;
                }
                return false;
            })
            return jsonTasks;
        case types.FILTER_LABEL:
            jsonTasks = jsonTasks.filter((task) => {
                if (task.labelArr.includes(action.filter) || action.filter === '') {
                    return true;
                }
                return false;
            })
            return jsonTasks;
        case types.FILTER_STRING:
            jsonTasks = jsonTasks.filter(task => {
                if (task.name.toLowerCase().includes(action.filter.toLowerCase())) {
                    return true;
                }
                return false;
            })
            return jsonTasks;
        case types.SORT:
            switch (action.filter) {
                case 'a-z':
                    jsonTasks = jsonTasks.sort((a, b) => {
                        return (a.name < b.name ? -1 : 1);
                    })
                    return jsonTasks;
                case 'z-a':
                    jsonTasks = jsonTasks.sort((a, b) => {
                        return (a.name > b.name ? -1 : 1);
                    })
                    return jsonTasks;
                default:
                    return jsonTasks;
            }
        default:
            return state;
    }
}

export default reducer;