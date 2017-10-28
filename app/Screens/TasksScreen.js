import React, { Component } from "react"
import { View, Text } from "react-native"

//redux imports
import { bindActionCreators } from "redux"
import { connect } from 'react-redux'

//store imports
import * as tasksActions from "../Store/Tasks/actions"
import * as tasksSelectors from "../Store/Tasks/selectors"

//component imports
import TaskList from "../Components/TaskList"
import NewTaskForm from "../Components/NewTaskForm"


class TasksScreen extends Component {

    addNewTask(newTask){
        this.props.tasksActions.addnewTask(newTask.taskName)
    }

    render() {
        return (
            <View >
                <View style={{height: 48}}>
                    <NewTaskForm
                        addNewTask={this.addNewTask.bind(this)}/>
                </View>
                <View>
                    <TaskList tasks={this.props.pendingTasks} />
                </View>
            </View>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        pendingTasks: tasksSelectors.getPendingTasks(state),
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        tasksActions: bindActionCreators(tasksActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksScreen)
