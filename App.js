/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

class Greeting extends Component{
  render(){
    return (
      <Text >Hello {this.props.name} ! </Text>
    )
  }
}

class Blink extends Component{
  constructor(props){
    super(props)
    this.state={
      showText: true
    }

    setInterval(() =>{
      this.setState({ showText: !this.state.showText})
    }, 1000)
  }

  render(){
    return(
      <View>
        {
          this.state.showText ?(
            <Text>{this.props.text}</Text>
          ):(
           <View></View> 
          )
        }
      </View>
    )
  }
}

export default class App extends Component<{}> {
  render() {
    let pic = {uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
        <View style={{ flex: 1, backgroundColor: 'powderblue' }} >
          <Greeting name='evans'/>
        </View>
        <View style={{ flex: 1, backgroundColor: 'skyblue' }} >
          <Blink text="lorem ipsum  "/>
        </View>
        <View style={{ height: 50, flex: 1, backgroundColor: 'steelblue' }} >
          <Image source={pic} style ={{ flex:1 }}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
})

