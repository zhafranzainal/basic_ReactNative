import React from "react";
import { View, Text } from 'react-native';

const SecondScreen = () => {

    return (
        <View style={{ flex: 1, backgroundColor: 'lavender', justifyContent: "center", alignItems: "center" }}>

            <View style={{ backgroundColor: 'skyblue', margin: 20, padding: 7, borderWidth: 1, borderColor: 'red', borderStyle: 'dashed', borderRadius: 7 }}>
                <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
                    Mobile Legends
                </Text>
                <Text style={{ textAlign: 'justify' }}>
                    <Text style={{ color: 'purple' }}>Mobile Legends</Text> is a multiplayer online battle arena (MOBA) game. The two
                    opposing teams fight to reach and destroy the enemy's base while defending
                    their own base for control of a path.
                </Text>
            </View>

            <View style={{ backgroundColor: 'cornflowerblue', marginLeft: 17, marginRight: 17, padding: 7, borderWidth: 1, borderColor: 'red', borderStyle: 'dotted', borderRadius: 7 }}>
                <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
                    PUBG
                </Text>
                <Text style={{ textAlign: 'justify' }}>
                    <Text style={{ color: 'purple' }}>PlayerUnknown's Battlegrounds</Text>, better known as PUBG, is a multiplayer battle royale
                    game in which players drop onto an island and fight to be the last one left standing..
                </Text>
            </View>

        </View>
    )

};

export default SecondScreen;