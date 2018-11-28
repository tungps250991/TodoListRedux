import {combineReducers} from 'redux';
import tasks from './tasks';
import taskEditing from './taskEditing';
import isAddNewTask from './isAddNewTask';

const rootReducer = combineReducers({
    tasks: tasks,
    taskEditing: taskEditing,
    isAddNewTask: isAddNewTask
});

export default rootReducer;