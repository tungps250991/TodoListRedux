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