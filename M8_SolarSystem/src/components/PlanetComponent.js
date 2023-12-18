import React from "react";
import { TouchableOpacity, View, Image, Text } from 'react-native';

export const PlanetComponent = (props) => {

    const { planetImage, planetName, planetDescription } = props;

    const clickedPlanet = (planet) => {
        capitalizedPlanet = planet[0].toUpperCase() + planet.slice(1);
        alert(`You clicked ${capitalizedPlanet}!`);
    };

    return (
        <TouchableOpacity onPress={() => clickedPlanet(planetName)}>
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

                    source={planetImage}

                />

                <View style={{
                    flex: 1,
                    marginLeft: 8,
                    marginRight: 8,
                    justifyContent: 'center'
                }}>

                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        textTransform: 'capitalize'
                    }}>
                        {planetName}
                    </Text>

                    <Text>{planetDescription}</Text>

                </View>

            </View>
        </TouchableOpacity>
    )

};
