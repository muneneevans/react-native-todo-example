import React, { Component } from "react"
import { View, Text, StyleSheet, ListView, FlatList, Image, SectionList, ScrollView } from "react-native"

const rows = [{"id":1,"model":"Corvette"},{"id":2,"model":"911"},{"id":3,"model":"Expedition"},{"id":4,"model":"Savana 1500"},{"id":5,"model":"Jimmy"},{"id":6,"model":"Fiesta"},{"id":7,"model":"Q"},{"id":8,"model":"Forenza"},{"id":9,"model":"SLK-Class"},{"id":10,"model":"GS"},{"id":11,"model":"MDX"},{"id":12,"model":"Corvette"},{"id":13,"model":"Range Rover Sport"},{"id":14,"model":"Rodeo"},{"id":15,"model":"Express 2500"},{"id":16,"model":"Sprinter"},{"id":17,"model":"Cirrus"},{"id":18,"model":"Express 2500"},{"id":19,"model":"Corvette"},{"id":20,"model":"GS"},{"id":21,"model":"9-3"},{"id":22,"model":"3 Series"},{"id":23,"model":"Corolla"},{"id":24,"model":"Armada"},{"id":25,"model":"RX-8"},{"id":26,"model":"Caliber"},{"id":27,"model":"Familia"},{"id":28,"model":"Eclipse"},{"id":29,"model":"GL-Class"},{"id":30,"model":"Q"},{"id":31,"model":"Traverse"},{"id":32,"model":"Accent"},{"id":33,"model":"7 Series"},{"id":34,"model":"E-Class"},{"id":35,"model":"Lanos"},{"id":36,"model":"Impala"},{"id":37,"model":"929"},{"id":38,"model":"Ram Van 3500"},{"id":39,"model":"Envoy XL"},{"id":40,"model":"CLS-Class"},{"id":41,"model":"Catera"},{"id":42,"model":"Regal"},{"id":43,"model":"H2"},{"id":44,"model":"Tredia"},{"id":45,"model":"Taurus"},{"id":46,"model":"Nubira"},{"id":47,"model":"928"},{"id":48,"model":"Odyssey"},{"id":49,"model":"Discovery"},{"id":50,"model":"Azera"},{"id":51,"model":"Suburban 1500"},{"id":52,"model":"Regal"},{"id":53,"model":"LeMans"},{"id":54,"model":"Expedition"},{"id":55,"model":"Quest"},{"id":56,"model":"SL-Class"},{"id":57,"model":"Town & Country"},{"id":58,"model":"Solara"},{"id":59,"model":"Ram 50"},{"id":60,"model":"Caprice"},{"id":61,"model":"Monaco"},{"id":62,"model":"924 S"},{"id":63,"model":"GT"},{"id":64,"model":"Sedona"},{"id":65,"model":"Colt"},{"id":66,"model":"Ram Van 2500"},{"id":67,"model":"Mazda5"},{"id":68,"model":"D150"},{"id":69,"model":"Cayenne"},{"id":70,"model":"Canyon"},{"id":71,"model":"TL"},{"id":72,"model":"GS"},{"id":73,"model":"Maxima"},{"id":74,"model":"Sable"},{"id":75,"model":"57"},{"id":76,"model":"LeBaron"},{"id":77,"model":"Previa"},{"id":78,"model":"Pilot"},{"id":79,"model":"Fury"},{"id":80,"model":"80"},{"id":81,"model":"Accent"},{"id":82,"model":"MX-5"},{"id":83,"model":"Pajero"},{"id":84,"model":"GTO"},{"id":85,"model":"Bonneville"},{"id":86,"model":"911"},{"id":87,"model":"Grand Voyager"},{"id":88,"model":"Prowler"},{"id":89,"model":"Canyon"},{"id":90,"model":"X5"},{"id":91,"model":"ES"},{"id":92,"model":"RL"},{"id":93,"model":"Ram Van B150"},{"id":94,"model":"Savana 2500"},{"id":95,"model":"X5"},{"id":96,"model":"3000GT"},{"id":97,"model":"ES"},{"id":98,"model":"Space"},{"id":99,"model":"90"},{"id":100,"model":"Silverado 3500"}]

const rowHasChanged = (r1, r2) => { r1.id !== r2.id }

const ds = new ListView.DataSource({ rowHasChanged })
export class HomeSceen extends Component {

    state = {
        dataSource: ds.cloneWithRows(rows)

    }

    renderRow = (rowData) => {
        return (
            <Text style={homeStyles.row}>
                {rowData.model}
            </Text>
        )
    }

    render(){
        return(
            <ListView
                style={homeStyles.container}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}/>
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
    },
    row: {}


})