import React, { Component } from "react"
import { View, Text, StyleSheet, FlatList, Image, SectionList, ScrollView } from "react-native"

const sections = [
    {
        key: 0,
        title: 'Basic Components',
        data: [
            { key: 0, text: 'View' },
            { key: 1, text: 'Text' },
            { key: 2, text: 'Image' },
            { key: 3, text: 'Image' },
            { key: 4, text: 'Image' },
            { key: 5, text: 'Image' },
            { key: 6, text: 'Image' },
            { key: 7, text: 'Image' },
            { key: 8, text: 'Image' },
            { key: 9, text: 'Image' },
        ]
    },
    {
        key: 1,
        title: 'List Components',
        data: [
            { key: 3, text: 'ScrollView' },
            { key: 7, text: 'ScrollView' },
            { key: 8, text: 'ScrollView' },
            { key: 4, text: 'ListView' },
        ],
        renderItem: ({ item }) => {
            return (
                <View style={homeStyles.container}>
                    <Text style={homeStyles.header}>
                        {item.text}
                    </Text>
                </View>
            )
        }
    }
]
export class HomeSceen extends Component {

    renderItem = ({ item }) => {
        return (
            <View style={homeStyles.square} />
        )
    }

    renderSectionHeader = ({ section }) => {
        return (
            <Text style={homeStyles.header}>
                {section.title}
            </Text>
        )
    }

    render() {
        return (
            <ScrollView style={homeStyles.Screen}>
                <SectionList
                    sections={sections}
                    renderItem={this.renderItem}
                    renderSectionHeader={this.renderSectionHeader}
                />
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
        paddingTop: 22
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
    }


})