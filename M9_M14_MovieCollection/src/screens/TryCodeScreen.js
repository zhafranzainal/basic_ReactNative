import React from 'react';
import { userData } from '../../data/TryCodeData';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';

const TryCodeScreen = () => {

    return (
        <View style={{ flex: 1 }}>

            <Text>
                An array of objects lets you store multiple values in a single variable. It
                stores a fixed-size sequential collection of elements of the same type. An
                array is used to store a collection of data, but it is often more useful to
                think of an array as a collection of variables of the same type.
            </Text>

            <FlatList
                contentContainerStyle={{ padding: 8 }}
                data={userData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.containerAnItem}>

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

const styles = StyleSheet.create({
    containerAnItem: {
        margin: 8,
        backgroundColor: 'lavender',
        borderWidth: 1
    }
});

export default TryCodeScreen;
