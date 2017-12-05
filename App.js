/* @flow */
import React from 'react';
import { Container, Button, Header, Text } from "native-base";
import { StatusBar } from "react-native";
import Expo from "expo";
import Langue from './components/Langue'
import Loading from './components/Loading'

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.timeoutHandle = setTimeout(()=>{
      this.setState({ isReady: true });
  }, 5000);
    
  }

  componentWillUnmount(){
    clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
}
  
  render() {
    if (!this.state.isReady) {
      return <Loading />;
    }
    
    return (
      <Container>
        <StatusBar hidden={true}/>
        <Langue />
      </Container>
      
    );
  }
}