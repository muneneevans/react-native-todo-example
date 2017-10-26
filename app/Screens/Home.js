import React, { Component } from "react"
import { View, Text, StyleSheet, ListView, FlatList, Image, SectionList, ScrollView } from "react-native"

const rows = {
    'Basic Components': [{
        "id": 1,
        "text": "Ranger"
      }, {
        "id": 2,
        "text": "Bonneville"
      }, {
        "id": 3,
        "text": "PT Cruiser"
      }, {
        "id": 4,
        "text": "Quattroporte"
      }, {
        "id": 5,
        "text": "Diablo"
      }, {
        "id": 6,
        "text": "Legacy"
      }, {
        "id": 7,
        "text": "GT"
      }, {
        "id": 8,
        "text": "Altima"
      }, {
        "id": 9,
        "text": "Yukon XL 2500"
      }, {
        "id": 10,
        "text": "XJ Series"
      }, {
        "id": 11,
        "text": "300ZX"
      }, {
        "id": 12,
        "text": "Savana 1500"
      }, {
        "id": 13,
        "text": "S-Class"
      }, {
        "id": 14,
        "text": "Passat"
      }, {
        "id": 15,
        "text": "G-Series G10"
      }, {
        "id": 16,
        "text": "S-Series"
      }, {
        "id": 17,
        "text": "Sable"
      }, {
        "id": 18,
        "text": "T100 Xtra"
      }, {
        "id": 19,
        "text": "Escalade"
      }, {
        "id": 20,
        "text": "Astro"
      }, {
        "id": 21,
        "text": "Grand Caravan"
      }, {
        "id": 22,
        "text": "E-Series"
      }, {
        "id": 23,
        "text": "Sportage"
      }, {
        "id": 24,
        "text": "Concorde"
      }, {
        "id": 25,
        "text": "9-5"
      }, {
        "id": 26,
        "text": "M-Class"
      }, {
        "id": 27,
        "text": "CTS-V"
      }, {
        "id": 28,
        "text": "Mazda5"
      }, {
        "id": 29,
        "text": "C-Class"
      }, {
        "id": 30,
        "text": "1500"
      }, {
        "id": 31,
        "text": "Continental GTC"
      }, {
        "id": 32,
        "text": "626"
      }, {
        "id": 33,
        "text": "Q"
      }, {
        "id": 34,
        "text": "Viper"
      }, {
        "id": 35,
        "text": "Millenia"
      }, {
        "id": 36,
        "text": "Camaro"
      }, {
        "id": 37,
        "text": "Dakota"
      }, {
        "id": 38,
        "text": "Fleetwood"
      }, {
        "id": 39,
        "text": "RDX"
      }, {
        "id": 40,
        "text": "Armada"
      }, {
        "id": 41,
        "text": "Defender"
      }, {
        "id": 42,
        "text": "Type-1h"
      }, {
        "id": 43,
        "text": "Terraza"
      }, {
        "id": 44,
        "text": "Firebird Formula"
      }, {
        "id": 45,
        "text": "F150"
      }, {
        "id": 46,
        "text": "Civic"
      }, {
        "id": 47,
        "text": "Charger"
      }, {
        "id": 48,
        "text": "Chariot"
      }, {
        "id": 49,
        "text": "X5 M"
      }, {
        "id": 50,
        "text": "Sierra"
      }, {
        "id": 51,
        "text": "Topaz"
      }, {
        "id": 52,
        "text": "Camaro"
      }, {
        "id": 53,
        "text": "Forte"
      }, {
        "id": 54,
        "text": "Catera"
      }, {
        "id": 55,
        "text": "Cougar"
      }, {
        "id": 56,
        "text": "RL"
      }, {
        "id": 57,
        "text": "DeVille"
      }, {
        "id": 58,
        "text": "Highlander"
      }, {
        "id": 59,
        "text": "Explorer"
      }, {
        "id": 60,
        "text": "CR-Z"
      }, {
        "id": 61,
        "text": "Spectra"
      }, {
        "id": 62,
        "text": "ES"
      }, {
        "id": 63,
        "text": "Journey"
      }, {
        "id": 64,
        "text": "57"
      }, {
        "id": 65,
        "text": "Sienna"
      }, {
        "id": 66,
        "text": "Ram 2500"
      }, {
        "id": 67,
        "text": "E150"
      }, {
        "id": 68,
        "text": "Diablo"
      }, {
        "id": 69,
        "text": "F150"
      }, {
        "id": 70,
        "text": "Clubman"
      }, {
        "id": 71,
        "text": "Grand Marquis"
      }, {
        "id": 72,
        "text": "Pathfinder"
      }, {
        "id": 73,
        "text": "Prius"
      }, {
        "id": 74,
        "text": "Passport"
      }, {
        "id": 75,
        "text": "GTI"
      }, {
        "id": 76,
        "text": "Elan"
      }, {
        "id": 77,
        "text": "Defender 90"
      }, {
        "id": 78,
        "text": "C30"
      }, {
        "id": 79,
        "text": "QX"
      }, {
        "id": 80,
        "text": "Quest"
      }, {
        "id": 81,
        "text": "Venture"
      }, {
        "id": 82,
        "text": "5000S"
      }, {
        "id": 83,
        "text": "E-Series"
      }, {
        "id": 84,
        "text": "Range Rover"
      }, {
        "id": 85,
        "text": "Cobalt"
      }, {
        "id": 86,
        "text": "Titan"
      }, {
        "id": 87,
        "text": "Express 1500"
      }, {
        "id": 88,
        "text": "Taurus"
      }, {
        "id": 89,
        "text": "Firefly"
      }, {
        "id": 90,
        "text": "Silverado"
      }, {
        "id": 91,
        "text": "Impala"
      }, {
        "id": 92,
        "text": "Accord"
      }, {
        "id": 93,
        "text": "Vibe"
      }, {
        "id": 94,
        "text": "CX-9"
      }, {
        "id": 95,
        "text": "9000"
      }, {
        "id": 96,
        "text": "RX-7"
      }, {
        "id": 97,
        "text": "Golf III"
      }, {
        "id": 98,
        "text": "Legacy"
      }, {
        "id": 99,
        "text": "Elantra"
      }, {
        "id": 100,
        "text": "850"
      }],
    'List Components': [
        { id: 3, text: 'ScrollView' },
        { id: 4, text: 'ListView' },
    ],
}

const rowHasChanged = (r1, r2) => { r1.id !== r2.id }
const sectionHeaderHasChanged = (s1, s2) => { s1 !== s2 }

const ds = new ListView.DataSource({ rowHasChanged, sectionHeaderHasChanged })
export class HomeSceen extends Component {

    state = {
        dataSource: ds.cloneWithRowsAndSections(rows)
    }

    renderRow = (rowData, sectionId) => {
        return (
            <Text style={homeStyles.row}>
                {rowData.text}
            </Text>
        )
    }

    renderSectionHeader = (sectionRows, sectionId) => {
        return (
            <Text style={homeStyles.header}>
                {sectionId} ({sectionRows.length})
            </Text>
        )
    }

    render() {
        return (
            <ListView
                style={homeStyles.container}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                renderSectionHeader={this.renderSectionHeader} />
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