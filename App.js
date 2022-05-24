import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigator from './navigation/DrawerNavigator';
import 'react-native-gesture-handler';
import { createRef } from 'react/cjs/react.production.min';


const navigationRef = createRef()
const nav = () => navigationRef.current // Sending props to drawernavigator where focused route is checked.

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer  ref={navigationRef} >
        <DrawerNavigator nav={nav}/> 
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
})

export default App