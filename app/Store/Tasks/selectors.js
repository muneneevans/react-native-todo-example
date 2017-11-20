export function getTasks(state) {
    return state.tasks.tasks
}
export function getCompletedTasks(state) {
    return state.tasks.tasks
    // return state.tasks.tasks.filter(task => task.completed == true);
}
export function getPendingTasks(state) {
    // return state.tasks.tasks.filter(task => task.completed == false);
    // console.log(state.tasks.tasks)
    return state.tasks.tasks
}