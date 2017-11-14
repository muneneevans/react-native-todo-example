import React, { Component } from "react"
import { View, Text, StyleSheet, ListView, FlatList, Image, SectionList, ScrollView } from "react-native"
import { StackNavigator } from "react-navigation"

//import screens
import TasksScreen from "../Screens/TasksScreen"
import Home from "../Screens/Home"



const AppShell = StackNavigator(
    {
        //the screens to be shown
        Task: {
            screen: TasksScreen,
            header: null
        },
        Home: {
            screen: Home
        }
    },
    {
        // set the header
        headerMode: 'none',
    }
)



export default AppShell