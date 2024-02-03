import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailMovieScreen from '../screens/DetailMovieScreen';

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
                    name='DetailMovie'
                    component={DetailMovieScreen}
                    options={{ headerShown: true }}
                />

            </Stack.Navigator>
        </NavigationContainer >
    )
};

export default MainNavigator;
