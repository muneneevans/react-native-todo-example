import * as types from "./actionTypes"
import Immutable from "seamless-immutable"

const initialState = Immutable({
    tasks: [{
        name: 'taskName',
        completed: false
    }]
})

export default function tasksReducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.ADD_NEW_TASK:
            return state.merge({
                tasks: addTaskToList(action.newTask, state.tasks,)
            })

        default:
            return state
    }
}


function addTaskToList(newTask, tasksList) {
    if (tasksList.length > 0) 
    { 
        let newTaskList = Immutable.asMutable(tasksList, {deep: true})
        newTaskList.push(newTask)
        return newTaskList
    }
    else{
        let newTaskList = []
        newTaskList.push(newTask)    
        return newTaskList
    }
}