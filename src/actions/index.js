import * as types from '../Constants/actionType'

export const initializeTasks = () => {
    return {
        type: types.INITIALIZE_TASKS
    }
}

export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
}

export const editTask = (taskEditing) => {
    return {
        type: types.EDIT_TASK,
        taskEditing: taskEditing
    }
}