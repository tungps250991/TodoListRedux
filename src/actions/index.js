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

export const getTaskEditing = (taskEditing) => {
    return {
        type: types.GET_TASK_EDITING,
        taskEditing: taskEditing
    }
}

export const editTask = (taskEditing) => {
    return {
        type: types.EDIT_TASK,
        taskEditing: taskEditing
    }
}

export const addTask = (newTask) => {
    return {
        type: types.ADD_TASK,
        task: newTask
    }
}

export const convertAddToEdit = () => {
    return {
        type: types.CONVERT_ADD_TO_EDIT
    }
}

export const convertEditToAdd = () => {
    return {
        type: types.CONVERT_EDIT_TO_ADD
    }
}

export const editTaskStatus = (id, status) => {
    return {
        type: types.EDIT_TASK_STATUS,
        id,
        status
    }
}

export const filter = (type, filter) => {
    return {
        type,
        filter
    }
}
