import React from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';

const MostViewedScreen = (props) => {

    const { route } = props;
    const sortedMostViewed = route.params.allMostViewed;

    return (
        <View>
            <FlatList
                contentContainerStyle={styles.mainDataContainer}
                data={sortedMostViewed}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.movieContainer}>
                            <Image
                                style={styles.movieImage}
                                source={{ uri: item.imageLink }}
                            />
                        </View>
                    )
                }}
            />
        </View>
    )

};

const styles = StyleSheet.create({
    mainDataContainer: {
        padding: 8
    },
    movieContainer: {
        margin: 8,
        padding: 16,
        backgroundColor: 'skyblue'
    },
    movieImage: {
        width: 130,
        height: 200
    }
});

export default MostViewedScreen;
