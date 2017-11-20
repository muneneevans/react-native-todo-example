import * as types from "./actionTypes"
import Realm from "realm"
import { TaskSchema, FolderSchema } from "./schemas"

export function addnewTask(taskName) {
    return function (dispatch, getState) {
        return dispatch({
            type: types.ADD_NEW_TASK,
            newTask: {
                name: taskName,
                completed: false
            }
        })
    }
}

export function getAllTasks() {
    return (dispatch, getState) => {
        dispatch({ type: types.GET_ALL_TASKS_START, })
        Realm.open({ schema: [TaskSchema, FolderSchema] })
            .then((realm) => {                
                return dispatch({
                    type: types.GET_ALL_TASKS_SUCCESS,
                    tasks: Array.from(realm.objects('Task'))
                })
            })
            .catch((error) => {
                throw (error)
            })
    }
}

