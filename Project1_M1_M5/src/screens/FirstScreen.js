import React from "react";
import { View, Text, Button } from 'react-native';

const FirstScreen = () => {

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>

            <Text>
                Hello World!
            </Text>

            <Button title="This is button"></Button>

        </View>
    )

}

export default FirstScreen;