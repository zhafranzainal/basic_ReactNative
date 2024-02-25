import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { movieData } from '../../data/MovieData';
import { ShowMovie } from '../components/MovieComponent';
import { Icon } from 'react-native-elements';
import { ButtonComponent } from '../components/ButtonComponent';

const HomeScreen = (props) => {

    const { navigation } = props;

    const [recommended, setRecommended] = useState([]);
    const [mostViewed, setMostViewed] = useState([]);
    const [allMostViewed, setAllMostViewed] = useState([]);

    const compareRating = (movieA, movieB) => {

        const ratingA = movieA.rating;
        const ratingB = movieB.rating;

        if (ratingA > ratingB) {
            return -1;
        } else if (ratingA < ratingB) {
            return 1;
        } else {
            return 0;
        }

    };

    const compareViewers = (movieA, movieB) => {

        const viewersA = movieA.viewers;
        const viewersB = movieB.viewers;

        if (viewersA > viewersB) {
            return -1;
        } else if (viewersA < viewersB) {
            return 1;
        } else {
            return 0;
        }

    };

    useEffect(() => {

        const sortedRecommended = [...movieData].sort(compareRating);
        setRecommended(sortedRecommended);

        const sortedMostViewed = [...movieData].sort(compareViewers);
        setMostViewed(sortedMostViewed);

        const threeRecommended = [];
        const threeMostViewed = [];

        for (let i = 0; i < 3; i++) {
            threeRecommended.push(sortedRecommended[i]);
            threeMostViewed.push(sortedMostViewed[i]);
        };

        setRecommended(threeRecommended);
        setMostViewed(threeMostViewed);
        setAllMostViewed(sortedMostViewed);

    }, []);

    return (
        <View style={styles.mainContainer}>

            <FlatList
                data={recommended}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.flatListContainer}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.dataContainer}>

                            <Image
                                style={styles.movieImage}
                                source={{ uri: item.imageLink }}
                            />

                            <View style={styles.movieDescriptionContainer}>

                                <View style={styles.movieDescription}>
                                    <Icon name="title" type="material" size={20} />
                                    <Text style={styles.title}>{item.title}</Text>
                                </View>

                                <View style={styles.yearContainer}>
                                    <Icon name="calendar" type="antdesign" size={20} />
                                    <Text style={styles.descriptionText}>{item.year}</Text>
                                </View>

                                {
                                    item.rating === 5 ?
                                        <View style={styles.movieDescription}>
                                            <Icon name="star-rate" type="material" size={20} />
                                            <Image
                                                style={styles.movieRating}
                                                source={require('../../assets/images/five-stars.png')}
                                            />
                                        </View>
                                        :
                                        item.rating === 4 ?
                                            <View style={styles.movieDescription}>
                                                <Icon name="star-rate" type="material" size={20} />
                                                <Image
                                                    style={styles.movieRating}
                                                    source={require('../../assets/images/four-stars.png')}
                                                />
                                            </View>
                                            :
                                            item.rating === 3 ?
                                                <View style={styles.movieDescription}>
                                                    <Icon name="star-rate" type="material" size={20} />
                                                    <Image
                                                        style={styles.movieRating}
                                                        source={require('../../assets/images/three-stars.png')}
                                                    />
                                                </View>
                                                :
                                                item.rating === 2 ?
                                                    <View style={styles.movieDescription}>
                                                        <Icon name="star-rate" type="material" size={20} />
                                                        <Image
                                                            style={styles.movieRating}
                                                            source={require('../../assets/images/two-stars.png')}
                                                        />
                                                    </View>
                                                    :
                                                    <View style={styles.movieDescription}>
                                                        <Icon name="star-rate" type="material" size={20} />
                                                        <Image
                                                            style={styles.movieRating}
                                                            source={require('../../assets/images/star.png')}
                                                        />
                                                    </View>
                                }

                                <ButtonComponent

                                    onPress={() => navigation.navigate('DetailMovie', { item })}

                                // onPress={() => navigation.navigate('DetailMovie', {
                                //     title: item.title,
                                //     year: item.year
                                // })}

                                />

                            </View>

                        </View>
                    )
                }}

                ListEmptyComponent={
                    <View style={{ alignItems: 'center' }}>
                        <Text>
                            No item in this category.
                        </Text>
                    </View>
                }

                ListHeaderComponent={
                    <View>

                        <View style={styles.mainCategoryContainer}>

                            <View style={styles.categoryContainer}>
                                <Text style={styles.categoryText}>
                                    Most Viewed
                                </Text>
                            </View>

                            <View style={styles.seeAllContainer}>
                                <TouchableOpacity
                                    onPress={
                                        () => navigation.navigate('MostViewed', { allMostViewed })
                                    }
                                >
                                    <Text style={styles.seeAllText}>See All</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                        <FlatList
                            horizontal
                            data={mostViewed}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => {
                                return (
                                    <ShowMovie
                                        image={{ uri: item.imageLink }}
                                        title={item.title}
                                        viewers={item.viewers}
                                        isHome={true}
                                    />
                                )
                            }}

                            contentContainerStyle={{ flex: mostViewed.length === 0 ? 1 : null }}
                            ListEmptyComponent={
                                <View style={{ alignItems: 'center', flex: 1 }}>
                                    <Text>
                                        No item in this category.
                                    </Text>
                                </View>
                            }

                        />

                        <View style={styles.mainCategoryContainer}>
                            <View style={styles.categoryContainer}>
                                <Text style={styles.categoryText}>
                                    Recommended
                                </Text>
                            </View>
                        </View>

                    </View>
                }
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
        margin: 8,
        borderWidth: 2,
        borderColor: '#96ceb4',
        borderRadius: 10,
        padding: 16,
        flexDirection: 'row'
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
    movieDescriptionContainer: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 8
    },
    yearContainer: {
        marginTop: 8,
        marginBottom: 8,
        flexDirection: 'row',
    },
    mainCategoryContainer: {
        marginTop: 8,
        marginLeft: 8,
        marginRight: 8,
        flexDirection: 'row'
    },
    categoryContainer: {
        flex: 1
    },
    categoryText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    movieRating: {
        width: 100,
        height: 20,
        marginLeft: 5
    },
    movieDescription: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    descriptionText: {
        marginLeft: 5
    },
    seeAllContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    seeAllText: {
        color: '#009688',
        textDecorationLine: 'underline'
    },
});

export default HomeScreen;
