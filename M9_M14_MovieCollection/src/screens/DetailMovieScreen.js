import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { MovieExplanation } from '../components/MovieComponent';

const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

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

            <ScrollView>
                <View style={styles.movieContainer}>
                    <View style={styles.middle}>

                        <Image
                            style={styles.image}
                            source={{ uri: movie.imageLink }}
                        />

                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{movie.title}</Text>
                        </View>

                        <MovieExplanation
                            name='Release year'
                            value={movie.year}
                        />

                        <MovieExplanation
                            name='Starring'
                            value={movie.starring}
                        />

                        <MovieExplanation
                            name='Description'
                            value={movie.description}
                        />

                        <MovieExplanation
                            name='Viewers'
                            value={numberWithCommas(movie.viewers)}
                        />

                        <MovieExplanation
                            name='Rating'
                            isRating={true}
                            rating={movie.rating}
                            value={movie.rating}
                        />

                    </View>
                </View>
            </ScrollView>

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
    },
    titleContainer: {
        marginTop: 8,
        marginBottom: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 8,
        backgroundColor: 'salmon',
        borderRadius: 10,
        color: 'white',
    }
});

export default DetailMovieScreen;
