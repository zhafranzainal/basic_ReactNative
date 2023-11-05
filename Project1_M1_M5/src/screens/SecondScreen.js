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

const ChallengeScreen = () => {

    return (
        <View style={{ flex: 1, backgroundColor: 'lavender', justifyContent: 'center', alignItems: 'center' }}>

            <View>
                <Text style={{ color: 'navy', fontWeight: 'bold', textDecorationLine: 'underline', textTransform: 'uppercase' }}>
                    iOS
                </Text>
            </View>

            <View style={{ backgroundColor: 'peachpuff', margin: 15, padding: 7, borderWidth: 1, borderStyle: 'dashed', borderRadius: 15 }}>
                <Text style={{ textAlign: 'justify', color: 'black' }}>
                    <Text style={{ fontWeight: 'bold' }}>iOS </Text>
                    (formerly iPhone OS) is a mobile operating system created and developed by
                    <Text style={{ fontWeight: 'bold', fontStyle: 'italic', color: 'deeppink' }}> Apple Inc. </Text>
                    exclusively for its hardware. It is the operating system that powers many
                    of the company's mobile devices, including the iPhone and iPod Touch.
                </Text>
            </View>

            <View style={{ marginBottom: 15 }}>
                <Text style={{ color: 'black' }}>
                    VS.
                </Text>
            </View>

            <View>
                <Text style={{ color: 'green', fontWeight: 'bold', textDecorationLine: 'underline', textTransform: 'uppercase' }}>
                    Android
                </Text>
            </View>

            <View style={{ backgroundColor: '#f3cbcb', margin: 15, padding: 7, borderWidth: 1, borderStyle: 'dashed', borderRadius: 15 }}>
                <Text style={{ textAlign: 'justify', color: 'black' }}>
                    <Text style={{ fontWeight: 'bold' }}>Android</Text> is a mobile operating system based on a modified version
                    of the Linux kernel and other open source software, designed primarily for touchscreen mobile devices such as
                    smartphones and tablets. Android is developed by a consortium of developers known as the
                    <Text style={{ fontWeight: 'bold', fontStyle: 'italic', color: 'purple' }}> Open Handset Alliance </Text>
                    and commercially sponsored by
                    <Text style={{ fontWeight: 'bold', fontStyle: 'italic', color: 'blue' }}> Google</Text>.
                </Text>
            </View>

        </View>
    )

};

export default ChallengeScreen;