import React from 'react';
import { View, StyleSheet, FlatList, Image, Text } from 'react-native';
import { movieData } from '../../data/MovieData';

const HomeScreen = () => {

    return (
        <View style={styles.mainContainer}>

            <FlatList
                data={movieData}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.flatListContainer}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.dataContainer}>
                            <Image
                                style={styles.movieImage}
                                source={{ uri: item.imageLink }}
                            />
                            <Text style={styles.title}>{item.title}</Text>
                        </View>
                    )
                }}
            />

        </View>
    )

};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    flatListContainer: {
        padding: 8
    },
    dataContainer: {
        margin: 8
    },
    movieImage: {
        width: 130,
        height: 200,
        borderRadius: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
});

export default HomeScreen;
