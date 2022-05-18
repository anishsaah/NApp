import * as React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import MyRewardsStackNavigator from './StackNavigators/MyRewardsStackNavigator'
import MessageStackNavigator from './StackNavigators/MessageStackNavigator'
import BottomTabNavigator from './BottomTabNavigtor'

import Icon from 'react-native-vector-icons/FontAwesome'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={ ({navigation}) => ({
        headerStyle: {
          backgroundColor:"#fff",
          height:56,
        },
        headerLeft: () => (
          <TouchableOpacity 
            onPress={ () => navigation.toggleDrawer() }     
            style={styles.headerLeft}
          >
            <Icon name="reorder" size={30} color="black"/>

          </TouchableOpacity>
        ),
      })

      }>
      


      <Drawer.Screen 
        name="HomeTabs" 
        component={BottomTabNavigator}
        options={{
          title: "Home",
          headerTitle: () => ( 
            <View style={styles.logo}>
              <Image source={require('../Assets/valLogo1.jpg')}/>
            </View>
          ),
          headerRight: () => (
            <View style={styles.headerRight}>
              <Icon name="shield" size={30} color="black"/> 
            </View>
          ),  

        }}/>
      
      
      <Drawer.Screen 
        name="MyRewardsStack" 
        component={MyRewardsStackNavigator}
        options={{
          title: "My Rewards",
          headerTitle: () => <Text style={styles.headerTitle}> My Rewards </Text>,
        }}
      />
      
      <Drawer.Screen 
        name="MessageList" 
        component={MessageStackNavigator}
        options={{
          title: "Messages",
          headerTitle: () => <Text style={styles.headerTitle}> ALL Message </Text>,
        }}
      />      

    </Drawer.Navigator>
  )
}

export default DrawerNavigator;

const styles = StyleSheet.create({
  headerRight:{
    marginRight: 15,
  },

  logo:{
    paddingLeft: 100,
  },

  headerTitle:{
    color:"#292929",
    // color: 'Black',
    fontWeight:'500',
    fontSize: 18,
  },

  headerLeft:{
    marginLeft: 15,
  }

}
)