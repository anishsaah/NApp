import * as React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'

import { routes, screens } from './RouteItems'
import BottomTabNavigator from './BottomTabNavigtor'

import Icon from 'react-native-vector-icons/FontAwesome'

const Drawer = createDrawerNavigator()

const CustomDrawerContent = (props) => {
  const currentRouteName = props.nav()?.getCurrentRoute().name //get focused route name
  return(
    <DrawerContentScrollView{...props}>
      {
        routes.filter(route => route.showInDrawer).map((route) =>  {
          const focusedRouteItem = routes.find( r => r.name === currentRouteName) // get route item config object
          const focused = focusedRouteItem ? 
            route.name === focusedRouteItem?.focusedRoute :
            route.name === screens.MessageStack
          return(
            <DrawerItem
              key={route.name}
              label = { () => (
                <Text style={focused ? styles.drawerLabelFocused : styles.drawerLabel }>
                  {route.title} 
                </Text>
              )}
              onPress = { () => props.navigation.navigate(route.name)}
              style={[styles.drawerItem, focused ? styles.drawerItemFocused : null ]} 
            /> 
          )
        })
      }
    </DrawerContentScrollView>
  )
} 

const DrawerNavigator = ({ nav }) => {
  return (
    <Drawer.Navigator
      screenOptions={ ({ navigation }) => ({
        headerStyle: {
          backgroundColor:"#fff",
          height:56,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.headerLeft}>
            <Icon name="reorder" size={30} color="black"/>
          </TouchableOpacity>
        ),
      })}
      drawerContent =  {(props) => <CustomDrawerContent {...props} nav={nav}/>}
      >
      


      <Drawer.Screen 
        name={screens.HomeTab}
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

    </Drawer.Navigator>
  )
}

export default DrawerNavigator;

const styles = StyleSheet.create({
  headerRight:{
    marginRight: 15,
  },

  logo:{
    paddingLeft: 110,
  },

  headerTitle:{
    color:"#292929",
    // color: 'Black',
    fontWeight:'500',
    fontSize: 18,
    paddingLeft:95,
    
  },

  headerLeft:{
    marginLeft: 15,
  },
  
  drawerLabel:{
    fontSize: 14,
  },
  drawerLabelFocused:{
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
  },
  drawerItem:{
    height: 50,
    justifyContent: 'center',
  },

  drawerItemFocused:{
    backgroundColor:"#758996",
  },
})