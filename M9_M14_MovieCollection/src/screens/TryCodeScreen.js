import React from 'react';
import { userData } from '../../data/TryCodeData';
import { View, FlatList, Text } from 'react-native';

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
                            <Text>{item.name}</Text>
                        </View>
                    )
                }}
            />

        </View >
    )

};

export default TryCodeScreen;
