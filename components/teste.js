import React from 'react'
import { View,Button,Text,StyleSheet,TextInput,StatusBar } from 'react-native'
//import Logine from './logine'
//import Logo from './logo'

export default class teste extends React.Component{
 render() {
    return (
      <View style= {styles.container}>
      <StatusBar backgroundColor='yellow' barStyle="light-content"/>
          <Text style={{color:'#ffffff'}}>connexion</Text>
          //<Logine/>
      </View>
    )
 }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#042539',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },

})
