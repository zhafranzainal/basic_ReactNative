import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { Icon } from 'react-native-elements';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StartScreen = () => {
    return (
        <Tab.Navigator initialRouteName="Home">

            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                color: focused ? 'green' : 'grey',
                                fontSize: 12
                            }}
                        >
                            Home
                        </Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name='home'
                            type='material-community'
                            color={focused ? 'purple' : 'grey'}
                            size={24}
                        />
                    ),
                    tabBarLabelPosition: 'below-icon',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'lavender'
                    }
                }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                color: focused ? 'green' : 'grey',
                                fontSize: 12
                            }}
                        >
                            Profile
                        </Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name='account'
                            type='material-community'
                            color={focused ? 'purple' : 'grey'}
                            size={24}
                        />
                    ),
                    tabBarLabelPosition: 'below-icon',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'lavender'
                    }
                }}
            />

        </Tab.Navigator>
    );
};

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>

                <Stack.Screen
                    name='Login'
                    component={LoginScreen}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{
                        headerTitleAlign: 'center',
                        headerLeft: null
                    }}
                />

                <Stack.Screen
                    name="Start"
                    component={StartScreen}
                    options={{
                        headerShown: false
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer >
    );
};

export default MainNavigator;
