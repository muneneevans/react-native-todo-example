import Immutable from "seamless-immutable"

export function addTaskToList(newTask, tasksList) {
    if (tasksList.length > 0) {
        let newTaskList = Immutable.asMutable(tasksList, { deep: true })
        newTaskList.push(newTask)
        return newTaskList
    }
    else {
        let newTaskList = []
        newTaskList.push(newTask)
        return newTaskList
    }
}