import React from "react"
import { View, Text, StyleSheet } from 'react-native'

const folderHeaderStyles = StyleSheet.create({
    headerView: {
        flex: 1,
        minHeight: 72,
        maxHeight: 10,
        elevation: 3,        
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: '#f15f41'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 36
    }
})


const FolderHeader = (props) => {
    return (
        <View style={folderHeaderStyles.headerView}>
            <Text style={folderHeaderStyles.headerText}>
                {props.header}
            </Text>
        </View>
    )
}

export default FolderHeader