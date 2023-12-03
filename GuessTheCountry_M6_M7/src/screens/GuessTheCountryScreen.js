import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

const GuessTheCountryScreen = () => {

    const [answer, setAnswer] = useState('');

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>

            <Text style={{
                textDecorationLine: 'underline',
                fontSize: 28,
                fontFamily: 'serif',
                marginBottom: 16
            }}>
                Guess The Country
            </Text>

            <Image
                style={{
                    width: 250,
                    height: 250,
                    borderRadius: 10
                }}
                source={{
                    uri: 'https://wallpaperaccess.com/full/180136.jpg'
                }}
            />

            <View style={{
                margin: 8,
                backgroundColor: 'lavender',
                padding: 4,
                borderWidth: 1
            }}>
                <Text style={{ fontSize: 18 }}>
                    Big Ben
                </Text>
            </View>

            <View style={{
                flexDirection: 'row',
                margin: 8
            }}>

                <TextInput
                    style={{
                        borderWidth: 1,
                        width: '50%',
                    }}
                    placeholder="Write your answer"
                    keyboardType='default'
                    onChangeText={(text) => setAnswer(text)}
                />

                <TouchableOpacity style={{
                    borderWidth: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    padding: 8,
                    marginLeft: 8,
                    marginBottom: 8,
                    marginTop: 8,
                    backgroundColor: 'skyblue'
                }}>

                    <Text style={{ fontSize: 18 }}>
                        Submit
                    </Text>

                </TouchableOpacity >

            </View >

            <Text>{answer}</Text>

        </View >
    )
};

export default GuessTheCountryScreen;