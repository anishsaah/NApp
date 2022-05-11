import * as React from 'react';
import { View, Text,Button, ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const image = { uri: "https://businessfirstfamily.com/wp-content/uploads/2017/02/technology-background-build-app.jpg" };

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'  }}>
      <ImageBackground source={image} style={styles.backgroundimage}>
        <Text style={styles.content}>You think I'm an old dog. I'll show them who I am. </Text>
      </ImageBackground>
    </View>
  );
}

function MessageScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> List of messages. </Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();


function MyTabs () {

return(
  <Tab.Navigator>
    <Tab.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{ title: "Welcome to my world"}}
    />
    <Tab.Screen name="Messages" component={MessageScreen} />
  </Tab.Navigator>
)}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs/>    
    </NavigationContainer>
  );
}

 

const styles = StyleSheet.create({
  backgroundimage:{
    flex: 1, 
    width:"100%",
  },
  content:{
    padding: 50,
    fontSize: 15,
    color:"white",
  }


})