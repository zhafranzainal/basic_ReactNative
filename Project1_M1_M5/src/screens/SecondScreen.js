import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';

const SecondScreen = () => {

    const openAlert = (game) => {
        if (game === 'moba') {
            alert('You chose Mobile Legends!');
        } else if (game === 'pubg') {
            alert('You chose PUBG!');
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'lavender', justifyContent: "center", alignItems: "center" }}>

            <View style={{ backgroundColor: 'skyblue', marginLeft: 17, marginRight: 17, marginBottom: 5, padding: 7, borderWidth: 1, borderColor: 'red', borderStyle: 'dashed', borderRadius: 7 }}>
                <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
                    Mobile Legends
                </Text>
                <Text style={{ textAlign: 'justify' }}>
                    <Text style={{ color: 'purple' }}>Mobile Legends</Text> is a multiplayer online battle arena (MOBA) game. The two
                    opposing teams fight to reach and destroy the enemy's base while defending
                    their own base for control of a path.
                </Text>
            </View>

            <TouchableOpacity
                style={{
                    backgroundColor: 'white',
                    margin: 8,
                    padding: 8,
                    borderRadius: 50,
                    borderWidth: 2,
                }}
                onPress={() => openAlert('moba')}
            >

                <Text style={{ color: 'lightcoral' }}>
                    Mobile Legends Button
                </Text>

            </TouchableOpacity>

            <View style={{ backgroundColor: 'cornflowerblue', marginLeft: 17, marginRight: 17, marginTop: 5, padding: 7, borderWidth: 1, borderColor: 'red', borderStyle: 'dotted', borderRadius: 7 }}>
                <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
                    PUBG
                </Text>
                <Text style={{ textAlign: 'justify' }}>
                    <Text style={{ color: 'purple' }}>PlayerUnknown's Battlegrounds</Text>, better known as PUBG, is a multiplayer battle royale
                    game in which players drop onto an island and fight to be the last one left standing..
                </Text>
            </View>

            <TouchableOpacity
                style={{
                    backgroundColor: 'white',
                    margin: 8,
                    padding: 8,
                    borderRadius: 50,
                    borderWidth: 2,
                }}
                onPress={() => openAlert('pubg')}
            >

                <Text style={{ color: 'lightcoral' }}>
                    PUBG Button
                </Text>

            </TouchableOpacity>

        </View>
    )

};

export default SecondScreen;