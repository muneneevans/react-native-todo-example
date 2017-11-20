import React from 'react'
import { Text, View, ListView, StyleSheet, CheckBox, ActivityIndicator } from "react-native"


const taskListStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    taskItem: {
        flex: 1,
        flexDirection: 'row',
        padding: 10
    },
    taskText: {
        flex: 1
    },
    taskCheckBox: {
        flex: 1,
        justifyContent: 'flex-end',
        minWidth: 25,
        maxWidth: 25,

    }
})


const rowHasChanged = (r1, r2) => { r1 !== r2 }
const ds = new ListView.DataSource({ rowHasChanged })

const TaskList = (props) => {
    if (props.tasks) {
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
    else {
        return (
            <View style={taskListStyles.container}>
                <ActivityIndicator size='large' color='grey' animating={true}/>
            </View>
        )
    }
}

export default TaskList