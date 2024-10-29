import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Contacts from './src/pages/Contacts'
import Information from './src/pages/Information'

const Drawer = createDrawerNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Contacts" component={Contacts}></Drawer.Screen>
        <Drawer.Screen name="Information" component={Information}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
