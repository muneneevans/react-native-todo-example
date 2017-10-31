import React, { Component } from 'react'
import { TextInput, StyleSheet } from "react-native"
import { Item, Input} from "native-base"


const newTaskFormStyles = StyleSheet.create({
    inputText: {
        fontSize: 18,
        lineHeight: 18,
        height: 30,
        padding: 5
    }
})

class NewTaskForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newTask: {
                taskName: ''
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
        if (this.state.newTask.taskName !== '') {
            this.props.addNewTask(this.state.newTask)
            this.setState({
                newTask: {
                    taskName: ''
                }
            })
        }
    }

    render() {
        return (
            <Item regular>
                <Input
                    onSubmitEditing={this.onSubmitEditing.bind(this)}
                    onChangeText={this.onChangeText.bind(this)}
                    value={this.state.newTask.taskName}
                    style={newTaskFormStyles.inputText}
                    placeholder="new task..."
                />
            </Item>
            
        )
    }
}


export default NewTaskForm