import React from "react";
import { View, Text } from 'react-native';

const SecondScreen = () => {

    return (
        <View style={{ flex: 1, backgroundColor: 'lavender', justifyContent: "center", alignItems: "center" }}>

            <View style={{ backgroundColor: 'skyblue', margin: 20, padding: 7, borderWidth: 1, borderColor: 'red', borderStyle: 'dashed', borderRadius: 7 }}>
                <Text>
                    Mobile Legends
                </Text>
            </View>

            <View style={{ backgroundColor: 'cornflowerblue', padding: 7, borderWidth: 1, borderColor: 'red', borderStyle: 'dotted', borderRadius: 7 }}>
                <Text>
                    PUBG
                </Text>
            </View>

        </View>
    )

};

export default SecondScreen;