import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>

                <Stack.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{ headerShown: true }}
                />

                <Stack.Screen
                    name='Detail'
                    component={DetailScreen}
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>
        </NavigationContainer >
    )
};

export default MainNavigator;
