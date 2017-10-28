import React from 'react'
import { Text, View, ListView, StyleSheet, CheckBox } from "react-native"


const taskListStyles = StyleSheet.create({
    container:{
        flex:1
    },
    taskItem:{
        flex: 1,
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5
    },
    taskText: {
        flex:1
    },
    taskCheckBox: {
        width:20,

    }
})


const rowHasChanged = (r1,r2) => { r1 !== r2}
const ds = new ListView.DataSource({rowHasChanged})

const TaskList = (props) => {
    let dataSource = ds.cloneWithRows(props.tasks)

    renderRow = (rowData) =>{
        return(
            <View style={taskListStyles.taskItem}>
                <Text>{rowData.name}</Text>
                {/* <CheckBox/> */}
            </View>
        )
    }

    return (
        <ListView
            
            dataSource={dataSource}
            renderRow={renderRow}/>
    )
}

export default TaskList