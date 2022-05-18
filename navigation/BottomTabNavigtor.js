import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import HomeStackNavigator from './StackNavigators/HomeStackNavigator'
import GunsStackNavigator from './StackNavigators/GunStackNavigator'
import ContactStackNavigator from './StackNavigators/ContactStackNavigator'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Tab.Screen 
        name="HomeStack" 
        component={HomeStackNavigator}  
        options={{
            tabBarIcon: ({ focused }) => (
                <Icon name='drupal' size={30} color={focused ? 'darkblue' : '#000'}/>
            ),
            tabBarLabel: () => <Text style={styles.tabBarLabel}>Home</Text>
        }}    
        />


      <Tab.Screen 
        name="GunsList" 
        component={GunsStackNavigator} 
        options={{
            tabBarIcon: ({ focused }) => (
                <Icon name='superpowers' size={30} color={focused ? 'darkblue' : '#000'}/>
            ),
            tabBarLabel: () => <Text style={styles.tabBarLabel}>Gun Here!</Text>
        }}
        />
      
      
      
      <Tab.Screen 
        name="ContactStack" 
        component={ContactStackNavigator}
        options={{
            tabBarIcon: ({ focused }) => (
                <Icon name='codepen' size={25} color={focused ? 'darkblue' : '#000'}/>
            ),
            tabBarLabel: () => <Text style={styles.tabBarLabel}>Spike Here</Text>
        }}
       />
    
    
    
    </Tab.Navigator>
  )
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
    tabBarLabel: {
      color: '#292929',
      fontSize: 12,
    },
  })