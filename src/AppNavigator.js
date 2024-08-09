import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from './screens/DetailsScreen';
import SecondScreens from './screens/SecondScreens';
import Index from './screens/index';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Index} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
  );
}
