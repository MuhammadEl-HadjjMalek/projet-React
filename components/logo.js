import React from 'react'
import { View,Button,Text,StyleSheet,TextInput,StatusBar,Image } from 'react-native'


export default class logo extends React.Component{
  render(){
    return(
      
      <View style={styles.container}>
            <Image
              style={styles.tinyLogo}
              source={require('../src/images/LOGO8TEMPON.png')}
            />
            <Text style={styles.styleText}>Welcome to my App</Text>
      </View>
    )
  }
}

const styles=StyleSheet.create({
      container:{
        flexGrow:1,
        justifyContent:'flex-end',
        alignItems:'center'
      },
      tinyLogo: {
      width: 80,
      height: 80
      },
      styleText:{
      marginVertical:15,
      fontSize:18,
      color:'#ffffff'
      }
})