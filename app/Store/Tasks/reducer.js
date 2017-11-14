import * as types from "./actionTypes"
import Immutable from "seamless-immutable"
import * as combiners from "./combiners"

const initialState = Immutable({
    tasks: [{ name: 'completed task', completed: true }, { name: 'uncompleted task', completed: false },]
})

export default function tasksReducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.ADD_NEW_TASK:
            return state.merge({
                tasks: combiners.addTaskToList(action.newTask, state.tasks, )
            })

        default:
            return state
    }
}


