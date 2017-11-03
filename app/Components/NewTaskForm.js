import React, { Component } from 'react'
import { TextInput, StyleSheet, View } from "react-native"



const newTaskFormStyles = StyleSheet.create({
    inputText: {
        fontSize: 18,
        lineHeight: 18,
        height: 30,
        padding: 2,
        paddingLeft: 5,
        paddingRight: 5,
        borderColor: 'grey',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,

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
            <View regular>
                <TextInput
                    onSubmitEditing={this.onSubmitEditing.bind(this)}
                    onChangeText={this.onChangeText.bind(this)}
                    value={this.state.newTask.taskName}
                    style={newTaskFormStyles.inputText}
                    placeholder="new task..."
                    underlineColorAndroid='transparent'
                />
            </View>

        )
    }
}


export default NewTaskForm