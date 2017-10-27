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


class TasksScreen extends Component {

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{height: 24}}></View>
                <View style={{ flex:1}}>
                    <TaskList tasks={this.props.tasks} />
                </View>
            </View>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        tasks: tasksSelectors.getTasks(state)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        taskActions: bindActionCreators(tasksActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksScreen)
