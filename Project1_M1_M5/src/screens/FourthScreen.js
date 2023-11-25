import React from "react";
import { View, ImageBackground } from 'react-native';

const FourthScreen = () => {
    return (
        <View style={{ margin: 16 }}>

            <ImageBackground

                style={{
                    width: '100%',
                    height: 300,
                    justifyContent: 'flex-end',
                    alignItems: 'flex-start'
                }}

                imageStyle={{ borderRadius: 10 }}
                source={{ uri: 'https://wallpaperaccess.com/full/250180.jpg' }}>

            </ImageBackground>

        </View >
    )
};

export default FourthScreen;