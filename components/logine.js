import React from 'react'
import { View,Button,Text,StyleSheet,TextInput,StatusBar, } from 'react-native'
import Logo from './logo'
import Form from './form'
import navigation from '../navigation/navigation'
export default class logine extends React.Component{
  render(){
    return(
        <View style={styles.container} >
            <StatusBar backgroundColor='red' barStyle="light-content"/>
            <Logo/>
            <Form/> 
            <View style={styles.styleSignup}>
                <Text style={styles.styleSignText}>Vous n'avez pas de compte? </Text>
                <Text style={styles.styleButton}>Inscivez-vous!</Text> 
            </View>
        </View>
    )
    }
}

const styles = StyleSheet.create({
  container:{
      backgroundColor:'#042539',
      flexGrow:1,
      alignItems:'center',
      justifyContent:'center'
  },
  styleSignup:{
    flexGrow:1,
      alignItems:'flex-end',
      justifyContent:'center',
      paddingVertical:16,
      flexDirection:'row'
  },
  styleSignText:{
    fontSize:16,
    color:'#ffffff',
  },
  styleButton:{
    color:'#FF7E70'
  }
})
