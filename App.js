import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
//import Teste from './components/teste'
import Logine from './components/logine'
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import Navigation from './navigation/navigation'

export default class App extends React.Component {
  render(){
    return (
    <Logine/>
    //<Navigation/> 
  ) 
  }
}

