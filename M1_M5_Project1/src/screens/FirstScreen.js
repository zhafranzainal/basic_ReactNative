import React from "react";
import { View, Text, Button } from 'react-native';

const FirstScreen = () => {

    const openAlert = () => {
        alert('You clicked the button')
    };

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>

            <Text style={{ margin: 16 }}>
                Hello
                <Text style={{ color: 'red' }}> World</Text>
                !
            </Text>

            <Button
                title="This is a button"
                onPress={openAlert}
            />

        </View>
    )

};

const ChallengeScreen = () => {

    const showAlert = () => {
        alert('You are awesome!!!')
    };

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>

            <Text style={{ color: 'green', margin: 16 }}>Let's Learn React Native Framework</Text>

            <Text>My name is Zhafran</Text>

            <Text style={{ margin: 16 }}>
                Now I'm learning about
                <Text style={{ color: 'navy' }}> React Native Components </Text>
                to build the user interface for Android apps
            </Text>

            <Text style={{ color: 'red', marginBottom: 16 }}>I Love Coding</Text>

            <Button
                title="Click me"
                onPress={showAlert}
            />

        </View>
    )

};

export default FirstScreen;