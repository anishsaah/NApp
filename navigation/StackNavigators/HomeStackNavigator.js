import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

const image = { uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0ff48752-8f58-43b5-89db-a9b96333522d/ddx0845-4f5f5363-09be-40df-9b32-05c4fa956528.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBmZjQ4NzUyLThmNTgtNDNiNS04OWRiLWE5Yjk2MzMzNTIyZFwvZGR4MDg0NS00ZjVmNTM2My0wOWJlLTQwZGYtOWIzMi0wNWM0ZmE5NTY1MjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Xc3GNGlxv43apbts9EtyzzR8Dt8C8VeFQCCiMit3gYs" };

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
      // flex: 1, 
      justifyContent: 'center',
      // resizeMode: 'cover',
      width:"100%",
      height:"100%",
    },
    content:{
      padding: 50,
      fontSize: 15,
      color:"white",
    },
  })
