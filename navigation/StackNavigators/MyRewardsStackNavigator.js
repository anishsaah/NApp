import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const MyRewards = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>MyRewards screen!</Text>
  </View>
)

const MyRewardsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="MyRewards" component={MyRewards} />
    </Stack.Navigator>
  )
}

export default MyRewardsStackNavigator