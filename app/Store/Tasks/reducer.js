import * as types from "./actionTypes"
import Immutable from "seamless-immutable"
import * as combiners from "./combiners"

const initialState = Immutable({
    // tasks: [{ name: 'completed task', completed: true }, { name: 'uncompleted task', completed: false },]
    tasks: undefined
})

export default function tasksReducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.ADD_NEW_TASK:
            return state.merge({
                tasks: combiners.addTaskToList(action.newTask, state.tasks, )
            })

        case types.GET_ALL_TASKS_START:            
            return state
            
        case types.GET_ALL_TASKS_SUCCESS:
            console.log('tasks fetched')
            return state.merge({
                tasks: action.tasks
            })
        default:
            return state
    }
}


