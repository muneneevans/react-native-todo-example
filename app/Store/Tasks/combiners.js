import Immutable from "seamless-immutable"
import Realm from "realm"
import { TaskSchema, FolderSchema } from "./schemas"
import * as taskActions from "./actions"

export function addTaskToList(newTask, tasksList) {
    if (tasksList.length > 0) {
        let newTaskList = Immutable.asMutable(tasksList, { deep: true })
        newTaskList.push(newTask)

        //write task to realm db
        Realm.open({ schema: [TaskSchema, FolderSchema] })
            .then((realm) => {
                realm.write(() => {
                    const nmyTask = realm.create('Task', {
                        name: newTask['name'],
                        description: 'None',
                        completed: false,
                    })
                })
            })
            .catch((error) => {
                throw (error)
            })
        return newTaskList
    }
    else {
        let newTaskList = []
        newTaskList.push(newTask)
        return newTaskList
    }
}

