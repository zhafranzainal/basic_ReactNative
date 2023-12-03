import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const HomeScreen = () => {

    const [number, setNumber] = useState(0);

    const decreaseNumber = () => {
        setNumber(number - 1);
    };

    const increaseNumber = () => {
        setNumber(number + 1);
    };

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
        }}>

            <View style={{
                margin: 8,
                padding: 8,
                borderWidth: 1
            }}>
                <TouchableOpacity onPress={() => decreaseNumber()}>
                    <Text style={{ fontSize: 50 }}> - </Text>
                </TouchableOpacity>
            </View>

            <View style={{
                margin: 8,
                padding: 8
            }}>
                <Text style={{ fontSize: 50 }}>{number}</Text>
            </View>

            <View style={{
                margin: 8,
                padding: 8,
                borderWidth: 1
            }}>
                <TouchableOpacity onPress={() => increaseNumber()}>
                    <Text style={{ fontSize: 50 }}> + </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
};

export default HomeScreen;