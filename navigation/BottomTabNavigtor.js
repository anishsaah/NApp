import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import HomeStackNavigator from './StackNavigators/HomeStackNavigator'
import BookStackNavigator from './StackNavigators/BookStackNavigator'
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
                <Icon name='home' size={30} color={focused ? '#551E18' : '#000'}/>
            ),
            tabBarLabel: () => <Text style={styles.tabBarLabel}>Home</Text>
        }}    
        />


      <Tab.Screen 
        name="BookStack" 
        component={BookStackNavigator} 
        options={{
            tabBarIcon: ({ focused }) => (
                <Icon name='bed' size={30} color={focused ? '#551E18' : '#000'}/>
            ),
            tabBarLabel: () => <Text style={styles.tabBarLabel}>Book Room</Text>
        }}
        />
      
      
      
      <Tab.Screen 
        name="ContactStack" 
        component={ContactStackNavigator}
        options={{
            tabBarIcon: ({ focused }) => (
                <Icon name='phone' size={30} color={focused ? '#551E18' : '#000'}/>
            ),
            tabBarLabel: () => <Text style={styles.tabBarLabel}>Contact Us</Text>
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