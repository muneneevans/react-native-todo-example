import { combineReducers } from 'redux'

//import all reducers
import tasksReducer from "./Tasks/reducer"

const rootReducer = combineReducers({
    //add reducer here
    tasks: tasksReducer
})

export default rootReducer