import React from 'react'
import { Text, View, ListView, StyleSheet, CheckBox } from "react-native"


const taskListStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    taskItem: {
        flex: 1,
        flexDirection: 'row',
        padding:5
    },
    taskText: {
        flex: 50
    },
    taskCheckBox: {
        flex:1,
        justifyContent: 'flex-end',
        minWidth: 25,        

    }
})


const rowHasChanged = (r1, r2) => { r1 !== r2 }
const ds = new ListView.DataSource({ rowHasChanged })

const TaskList = (props) => {
    let dataSource = ds.cloneWithRows(props.tasks)

    renderRow = (rowData) => {
        return (
            <View style={taskListStyles.taskItem}>
                <View style={taskListStyles.taskText}>
                    <Text>{rowData.name}</Text>
                </View>
                <View style={taskListStyles.taskCheckBox}>
                    <CheckBox />
                </View>
            </View>
        )
    }

    return (
        <ListView

            dataSource={dataSource}
            renderRow={renderRow} />
    )
}

export default TaskList