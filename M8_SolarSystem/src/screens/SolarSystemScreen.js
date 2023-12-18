import React from 'react';
import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';

const SolarSystemScreen = () => {
    return (
        <View style={{ flex: 1 }}>

            <View style={{
                padding: 16,
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 30,
                    fontFamily: 'serif',
                    textDecorationLine: 'underline',
                    textTransform: 'uppercase',
                    color: 'black'
                }}>
                    Solar System
                </Text>
            </View>

            <View style={{
                flexDirection: 'row',
                backgroundColor: 'wheat',
                margin: 16,
                padding: 16,
                borderRadius: 20,
                borderColor: 'green',
                borderWidth: 1
            }}>

                <Image

                    style={{
                        width: 100,
                        height: 100,
                    }}

                    source={require('../../assets/images/mercury.png')}

                />

                <View style={{
                    flex: 1,
                    marginLeft: 8,
                    marginRight: 8,
                    justifyContent: 'center'
                }}>

                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}>
                        Mercury
                    </Text>

                    <Text>Mercury is the fastest</Text>

                </View>

            </View>

        </View>
    )
};

export default SolarSystemScreen;