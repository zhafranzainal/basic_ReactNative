import React from 'react';
import { userData } from '../../data/TryCodeData';
import { View, FlatList, Text, Image } from 'react-native';

const TryCodeScreen = () => {

    return (
        <View style={{ flex: 1 }}>

            <FlatList
                contentContainerStyle={{ padding: 8 }}
                data={userData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={{
                            margin: 8,
                            backgroundColor: 'lavender',
                            borderWidth: 1
                        }}>

                            <Image
                                source={{ uri: item.imageLink }}
                                style={{
                                    width: 100,
                                    height: 100
                                }}
                            />

                            <Text>{item.name}</Text>
                            <Text>{item.gender}</Text>
                            <Text>{item.age}</Text>

                        </View>
                    )
                }}
            />

        </View >
    )

};

export default TryCodeScreen;
