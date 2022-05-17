import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const Book = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Book Screen!</Text>
    </View>
)

const BookStackNavigator = () =>{
    return(
        <Stack.Navigator 
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name='Book' component={Book} />   
        </Stack.Navigator>
    )
}

export default BookStackNavigator;