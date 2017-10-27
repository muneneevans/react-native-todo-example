import * as types from "./actionTypes"

export function addnewTask(taskName){
    return function(dispatch, getState){
        return dispatch({
            type: types.ADD_NEW_TASK,
            task: {
                name: taskName,
                completed: false
            }
        })
    }
}