import React, { Component } from "react"
import { View, Text, StyleSheet, ListView, FlatList, Image, SectionList, ScrollView } from "react-native"

//import screens
import TasksScreen from "../Screens/TasksScreen"

class AppShell extends Component {
    render() {
        return (
            <View style={{}}>
                <TasksScreen/>
            </View >
        )
    }
}

export default AppShell