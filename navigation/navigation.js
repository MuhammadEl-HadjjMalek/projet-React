import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Inscription from '../components/inscription'

function MenuScreen({ navigation }) {
  return (
   //<Inscription/> 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Options')}
        title="Go to notifications"
      />
    </View>
  );
}

function AchatScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function RechargeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function HistoriqueScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function OptionsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Menu" component={MenuScreen} />
        <Drawer.Screen name="Achat credit woyofal" component={AchatScreen} />
         <Drawer.Screen name="Rechargement credit woyofal" component={RechargeScreen} />
        <Drawer.Screen name="Historique" component={HistoriqueScreen} />
        <Drawer.Screen name="Options" component={OptionsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}