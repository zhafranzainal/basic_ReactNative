import { View, Image, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';

const DetailMovieScreen = (props) => {

    const { route } = props;
    const movie = route.params.item;
    // const { title, year } = route.params;

    useEffect(() => {
        console.log(movie);
        // console.log(title);
        // console.log(year);
    }, []);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.movieContainer}>
                <View style={styles.middle}>

                    <Image
                        style={styles.image}
                        source={{ uri: movie.imageLink }}
                    />

                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    movieContainer: {
        margin: 8,
        padding: 8
    },
    middle: {
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 300,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#ffbe7bff'
    }
});

export default DetailMovieScreen;
