import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import navigation from '../navigation/navigation'
import { 
  View,
  Button,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  Image,
  TouchableOpacity
  } from 'react-native'


export default class logo extends React.Component{
  render(){
    return(
      
      <View style={styles.container}>
            <TextInput style={styles.styleInput} placeholder='Identifiant'            placeholderTextColor='#ffffff'/>
            <TextInput style={styles.styleInput} placeholder='Password'            placeholderTextColor='#ffffff' secureTextEntry={true}/>
            <TouchableOpacity style={styles.button}>
                      <Text style={styles.styleButton} onPress={()=>{navigation}} >Login</Text>
            </TouchableOpacity>
           
      </View>
    )
  }
}

const styles=StyleSheet.create({
      container:{
        flexGrow:1,
        justifyContent:'center',
        alignItems:'center'
      },
       styleInput:{
        width:240,
        height:40,
       backgroundColor:'#FF7E70',
       borderRadius:20,
       paddingHorizontal:17,
       marginVertical:9
     },
     styleButton:{
       fontSize:16,
       fontWeight:'500',
       color:'#ffffff',
       textAlign:'center',
       paddingVertical:12,
     },
     button:{
       width:240,
       height:40,
       backgroundColor:'#063D60',
       borderRadius:20,
       marginVertical:10,
       
     }
  
})