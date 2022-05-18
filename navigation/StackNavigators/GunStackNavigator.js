import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const Guns = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Choose Guns!</Text>
    </View>
)

const GunsStackNavigator = () =>{
    return(
        <Stack.Navigator 
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name='Guns' component={Guns} />   
        </Stack.Navigator>
    )
}

export default GunsStackNavigator;