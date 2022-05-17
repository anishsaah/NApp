import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import MyRewardsStackNavigator from './StackNavigators/MyRewardsStackNavigator'
import MessageStackNavigator from './StackNavigators/MessageStackNavigator'
import BottomTabNavigator from './BottomTabNavigtor'


const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeTabs" component={BottomTabNavigator} />
      <Drawer.Screen name="MyRewardsStack" component={MyRewardsStackNavigator} />
      <Drawer.Screen name="MessageList" component={MessageStackNavigator} />      
    </Drawer.Navigator>
  )
}

export default DrawerNavigator;