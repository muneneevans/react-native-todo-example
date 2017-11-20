import React, { Component } from "react"
import { View, Text, StyleSheet, Button } from "react-native"

//redux imports
import { bindActionCreators } from "redux"
import { connect } from 'react-redux'

//store imports
import * as tasksActions from "../Store/Tasks/actions"
import * as tasksSelectors from "../Store/Tasks/selectors"

//component imports
import TaskList from "../Components/TaskList"
import NewTaskForm from "../Components/NewTaskForm"
import FolderHeader from "../Components/FolderHeader"


const taskScreenStyles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: "white"
    },
    contentView: {
        flex: 1,
    },
    bodyView: {
        padding: 5,
    },
    footerView: {
        height: 50,
        backgroundColor: '#FAFAFA',
        elevation: 6
    },


})


class TasksScreen extends Component {

    componentDidMount(){
        this.props.tasksActions.getAllTasks()
    }

    addNewTask(newTask) {
        this.props.tasksActions.addnewTask(newTask.taskName)
    }

    render() {
        return (
            <View style={taskScreenStyles.screenContainer}>
                <View style={taskScreenStyles.contentView}>
                    <FolderHeader header={'evans'} />
                    <View style={taskScreenStyles.bodyView}>
                        <NewTaskForm
                            addNewTask={this.addNewTask.bind(this)} />
                        <TaskList tasks={this.props.pendingTasks} />
                    </View>
                </View>
                <View style={taskScreenStyles.footerView}>
                    <Button
                        onPress={() => this.props.navigation.navigate('Home')}
                        title="Home" />
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
