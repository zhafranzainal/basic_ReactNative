import React from "react";
import { View, ImageBackground, Text } from 'react-native';

const FourthScreen = () => {
    return (
        <View style={{ margin: 16 }}>

            <ImageBackground style={{
                width: '100%',
                height: 300,
                justifyContent: 'flex-end',
                alignItems: 'flex-start'
            }}
                imageStyle={{ borderRadius: 10 }}
                source={{ uri: 'https://wallpaperaccess.com/full/250180.jpg' }}
            >

                <Text style={{
                    backgroundColor: 'mistyrose',
                    padding: 8,
                    margin: 8,
                    fontSize: 18,
                    fontWeight: 'bold',
                }}>
                    Disneyland
                </Text>

            </ImageBackground>

        </View >
    )
};

export default FourthScreen;