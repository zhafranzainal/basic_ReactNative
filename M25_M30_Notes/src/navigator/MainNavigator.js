import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import NoteListScreen from '../screens/NoteListScreen';
import AddNoteScreen from '../screens/AddNoteScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="NoteList">

                <Stack.Screen
                    name="NoteList"
                    component={NoteListScreen}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="CreateNote"
                    component={AddNoteScreen}
                    options={{
                        headerShown: false
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigator;
