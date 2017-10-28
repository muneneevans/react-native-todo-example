import React, { Component } from 'react'
import { TextInput, StyleSheet } from "react-native"

const newTaskFormStyles = StyleSheet.create({
    inputText: {
        fontSize: 18,
        backgroundColor: '#f2f2f2'
    }
})

class NewTaskForm extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            newTask: {
                taskName: 'undefined'
            }
        }
    }

    onChangeText = (text) => {
        this.setState({
            newTask: {
                taskName: text
            }
        })        
    }
    onSubmitEditing = (sender) => {
        if(this.state.newTask.taskName !== 'undefined'){
            this.props.addNewTask(this.state.newTask)            
        }
    }

    render() {
        return (
            <TextInput
                style={newTaskFormStyles.inputText}
                placeholder="new task..."
                onSubmitEditing={ this.onSubmitEditing.bind(this) }
                onChangeText={this.onChangeText.bind(this)}
            />
        )
    }
}


export default NewTaskForm