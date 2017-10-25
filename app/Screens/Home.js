import React, { Component } from "react"
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from "react-native"

const rows = [
    {
        "key": 1,
        "model": "Outlander",
        "make": "Mitsubishi",
        "year": 2011,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    }, {
        "key": 2,
        "model": "Corvette",
        "make": "Chevrolet",
        "year": 1960,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    }, {
        "key": 3,
        "model": "Frontier",
        "make": "Nissan",
        "year": 2000,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    }, {
        "key": 4,
        "model": "Murciélago LP640",
        "make": "Lamborghini",
        "year": 2008,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    }, {
        "key": 5,
        "model": "QX",
        "make": "Infiniti",
        "year": 2006,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    }, {
        "key": 6,
        "model": "Regal",
        "make": "Buick",
        "year": 1989,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    }, {
        "key": 7,
        "model": "Baja",
        "make": "Subaru",
        "year": 2005,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    }, {
        "key": 8,
        "model": "M",
        "make": "Infiniti",
        "year": 1992,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    }, {
        "key": 9,
        "model": "Legacy",
        "make": "Subaru",
        "year": 2012,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    }, {
        "key": 10,
        "model": "Aurora",
        "make": "Oldsmobile",
        "year": 2002,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    }]
export class HomeSceen extends Component {

    render() {
        console.log(rows)
        return (
            <View style={homeStyles.Screen}>
                <FlatList
                    data={rows}
                    renderItem={({ item }) => (
                        <View style={homeStyles.item}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={homeStyles.header}>{item.model}</Text>
                                <Text style={homeStyles.date} >{item.make}</Text>
                            </View>
                            <View style={{}}>
                                <Text style={homeStyles.description} ellipsizeMode="tail" numberOfLines={3} >{item.description}</Text>
                            </View>
                        </View>
                    )}
                />
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
        paddingLeft: 10
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
    description:{
        
    },
    date: {
        flex: 1,
        textAlign: 'right'
    }


})