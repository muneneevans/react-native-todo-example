import React, { Component } from "react"
import { View, Text, StyleSheet, ListView, FlatList, Image, SectionList, ScrollView } from "react-native"


export class HomeSceen extends Component {

   
    render() {
        return (
            <View>
              <Text>
                Home Page
              </Text>
            </View>
        )
    }
}


const homeStyles = StyleSheet.create({
    Screen: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 10,
        paddingLeft: 10,
    },
    Card: {
        flex: 1,
        backgroundColor: "#ffffff",
        borderRadius: 3,
        padding: 5,
        borderColor: 'red',
    },
    image: {
        flex: 1,

    },
    boxSmall: {
        width: 200,
        height: 200,
        marginBottom: 10,
        marginRight: 10,
        backgroundColor: 'skyblue',
    },
    boxLarge: {
        flex: 1,
        height: 300,
        backgroundColor: 'steelblue',
    },
    container: {
        flex: 1,
        // paddingTop: 22
    },
    item: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    header: {
        fontSize: 22,
        flex: 2
    },
    description: {
    },
    date: {
        flex: 1,
        textAlign: 'right'
    },
    square: {
        width: 60,
        height: 60,
        backgroundColor: 'blue'
    },
    row: {}


})

export default HomeSceen