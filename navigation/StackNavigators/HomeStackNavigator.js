import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

const image = { uri: "https://businessfirstfamily.com/wp-content/uploads/2017/02/technology-background-build-app.jpg" };

const Stack = createStackNavigator()

const Home = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ImageBackground source={image} style={styles.backgroundimage}>
        <Text style={styles.content}>You think I'm an old dog. I'll show them who I am. </Text>
      </ImageBackground>
  </View>
)

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default HomeStackNavigator;

const styles = StyleSheet.create({
    backgroundimage:{
      flex: 1, 
      width:"100%",
    },
    content:{
      padding: 50,
      fontSize: 15,
      color:"white",
    },
  })
