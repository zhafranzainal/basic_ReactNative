import React from "react";
import { View, ImageBackground, Text, TextInput } from 'react-native';

const FourthScreen = () => {
    return (
        <View style={{ margin: 16 }}>

            <ImageBackground

                style={{
                    width: '100%',
                    height: 300,
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end'
                }}

                imageStyle={{
                    borderRadius: 10,
                    opacity: 0.5
                }}

                source={{
                    uri: 'https://wallpaperaccess.com/full/250180.jpg'
                }}

            >

                <Text
                    style={{
                        backgroundColor: 'mistyrose',
                        padding: 8,
                        margin: 8,
                        fontSize: 18,
                        fontWeight: 'bold',
                    }}
                >
                    Disneyland
                </Text>

            </ImageBackground>

            <Text style={{ marginTop: 12, marginBottom: 12 }}>
                Description
            </Text>

            <TextInput

                style={{
                    padding: 10,
                    borderWidth: 1,
                    height: 40,
                    fontSize: 16
                }}

                placeholder='About the place'
                multiline={true}
                keyboardType='default'

            />

        </View >
    )
};

export default FourthScreen;