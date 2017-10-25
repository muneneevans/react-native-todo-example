import React, { Component } from "react"
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from "react-native"

export class HomeSceen extends Component {

    render() {
        return (
            <ScrollView style={homeStyles.container}>
                <View style={homeStyles.boxLarge}/>
                <ScrollView horizontal>
                    <View style={homeStyles.boxSmall}/>
                    <View style={homeStyles.boxSmall}/>
                    <View style={homeStyles.boxSmall}/>
                </ScrollView>
                <View style={homeStyles.boxLarge}/>
                <View style={homeStyles.boxSmall}/>
                <View style={homeStyles.boxLarge}/>                
            </ScrollView>
        )
    }
}


const homeStyles = StyleSheet.create({
    Screen: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingTop: 20,
        paddingBottom: 20,
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

    container: {
        flex: 1
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

})