import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { songData } from '../../data/SongData';

const HomeScreen = () => {
    return (
        <View style={{ padding: 8 }}>

            <FlatList
                data={songData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.mainContainer}>

                            <Image
                                style={styles.songImage}
                                source={{ uri: item.imageLink }}
                            />

                            <View style={styles.songContainer}>

                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                    {item.title}
                                </Text>

                                <View style={styles.singerContainer}>
                                    <Text>{item.singer}</Text>
                                </View>

                                <Text>{item.rating}</Text>

                                <View style={styles.buttonContainer}>
                                    <TouchableOpacity style={styles.insideButtonContainer}>
                                        <Text style={{ color: 'white' }}>SEE DETAILS</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>

                        </View>
                    )
                }}

                contentContainerStyle={{ flex: songData.length === 0 ? 1 : null }}
                ListEmptyComponent={
                    <View style={{ alignItems: 'center', flex: 1 }}>
                        <Text>
                            No item in this category.
                        </Text>
                    </View>
                }

            />

        </View >
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        margin: 8,
        borderWidth: 2,
        borderColor: '#A6A6BD',
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    songImage: {
        width: 120,
        height: 120
    },
    songContainer: {
        marginLeft: 8,
        flex: 1
    },
    singerContainer: {
        marginTop: 8,
        marginBottom: 8
    },
    ratingImage: {
        width: 100,
        height: 20
    },
    buttonContainer: {
        alignItems: 'baseline',
        marginTop: 8
    },
    insideButtonContainer: {
        padding: 8,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#A6A6BD',
        backgroundColor: '#AFCAE8'
    },
});

export default HomeScreen;
