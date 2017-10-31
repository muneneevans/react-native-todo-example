import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"

//redux imports
import { bindActionCreators } from "redux"
import { connect } from 'react-redux'

//store imports
import * as tasksActions from "../Store/Tasks/actions"
import * as tasksSelectors from "../Store/Tasks/selectors"

//component imports
import TaskList from "../Components/TaskList"
import NewTaskForm from "../Components/NewTaskForm"




const taskScreenStyles = StyleSheet.create({
    headerView: {
        height: 72, elevation: 2,
        backgroundColor: "#fAfAfA",
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        paddingLeft: 5,
        paddingRight: 5
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 36
    },
    bodyView: {
        padding: 5
    },

})


class TasksScreen extends Component {

    addNewTask(newTask) {
        this.props.tasksActions.addnewTask(newTask.taskName)
    }

    render() {
        return (
            <View >
                <View style={taskScreenStyles.headerView}>
                    <Text style={taskScreenStyles.headerText}>Overdone</Text>
                </View>
                <View style={taskScreenStyles.bodyView}>
                    <View style={{ height: 48 }}>
                        <NewTaskForm
                            addNewTask={this.addNewTask.bind(this)} />
                    </View>
                    <View>
                        <TaskList tasks={this.props.pendingTasks} />
                    </View>
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
