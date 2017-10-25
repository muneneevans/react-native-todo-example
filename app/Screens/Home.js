import React, { Component } from "react"
import { View, Text, StyleSheet, FlatList, Image } from "react-native"

export class HomeSceen extends Component {

    render() {
        return (
            <View style={homeStyles.Screen}>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }} style={homeStyles.image} />
                    <FlatList
                        data={[{ key: 'a' }, { key: 'b' }]}
                        style={{ flexDirection: 'row' }}
                        renderItem={({ item }) => (
                            <View style={{ padding: 5, flexDirection: 'column' }}>
                                <View style={homeStyles.Card}>
                                    <Text>{item.key}</Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
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

})