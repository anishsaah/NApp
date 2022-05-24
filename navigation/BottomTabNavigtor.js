import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, StyleSheet,View } from 'react-native'
import { routes,screens } from './RouteItems'

import HomeStackNavigator from './StackNavigators/HomeStackNavigator'
import GunsStackNavigator from './StackNavigators/GunStackNavigator'
import ContactStackNavigator from './StackNavigators/ContactStackNavigator'

import MyRewardsStackNavigator from './StackNavigators/MyRewardsStackNavigator'
import MessageStackNavigator from './StackNavigators/MessageStackNavigator'

const Tab = createBottomTabNavigator()

const tabOptions = ({ route }) => {
  const item = routes.find(routeItem => routeItem.name === route.name ) //get the route config object

  if (!item.showInTab) {
    return{
      tabBarButton: () => <View style= {{width: 0 }} />,
      headerShown: false,
      tabBarSyle: styles.tabContainer,
      title: item.title,
    }
  }

  return{
    tabBarIcon: ({ focused }) => item.icon(focused),
    tabBarLabel: () => (
      <Text style={styles.tabBarLabel}> {item.title || ""} </Text>
    ),
    headerShown: false,
    tabBarSyle: styles.tabContainer,
    title:item.title,
  }

}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={tabOptions}>
      <Tab.Screen name={screens.HomeStack} component={HomeStackNavigator} />
      <Tab.Screen name={screens.GunStack} component={GunsStackNavigator}/>
      <Tab.Screen name={screens.ContactStack} component={ContactStackNavigator}/>
      
      <Tab.Screen name={screens.MyRewardsStack} component={MyRewardsStackNavigator}/>
      <Tab.Screen name={screens.MessageStack} component={MessageStackNavigator}/>

    </Tab.Navigator>
  )
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
    tabBarLabel: {
      color: '#292929',
      fontSize: 12,
    },

    tabContainer:{
      height: 60,
    }
  })
  



