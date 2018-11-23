import {combineReducers} from 'redux';
import tasks from './tasks';
import taskEditing from './taskEditing';

const rootReducer = combineReducers({
    tasks: tasks,
    taskEditing: taskEditing
});

export default rootReducer;