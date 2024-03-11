import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SongComponent } from '../components/SongComponent';

const DetailScreen = ({ route }) => {

    const song = route.params.item;

    useEffect(() => {
        console.log(song);
    }, []);

    return (
        <View style={styles.mainContainer}>

            <Image
                style={styles.songImage}
                source={{ uri: song.imageLink }}
            />

            <View style={styles.titleContainer}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{song.title}</Text>
            </View>

            <SongComponent name='Singer' description={song.singer} />
            <SongComponent name='Year' description={song.year} />
            <SongComponent name='Genre' description={song.genre} />
            <SongComponent name='Songwriters' description={song.songwriters} />

            <View style={styles.ratingContainer}>

                <View style={{ flex: 1 }}>
                    <Text>Rating</Text>
                </View>

                <Text> : </Text>

                <View style={{ flex: 3 }}>
                    {
                        song.rating === 5 ?
                            <Image
                                style={styles.ratingImage}
                                source={require('../../assets/images/five-stars.png')}
                            />
                            :
                            song.rating === 4 ?
                                <Image
                                    style={styles.ratingImage}
                                    source={require('../../assets/images/four-stars.png')}
                                />
                                :
                                song.rating === 3 ?
                                    <Image
                                        style={styles.ratingImage}
                                        source={require('../../assets/images/three-stars.png')}
                                    />
                                    :
                                    song.rating === 2 ?
                                        <Image
                                            style={styles.ratingImage}
                                            source={require('../../assets/images/two-stars.png')}
                                        />
                                        :
                                        <Image
                                            style={styles.ratingImage}
                                            source={require('../../assets/images/star.png')}
                                        />
                    }
                </View>

            </View>

        </View>
    )

};

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        margin: 16
    },
    songImage: {
        width: 200,
        height: 200,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'salmon'
    },
    titleContainer: {
        marginTop: 8,
        marginBottom: 16
    },
    ratingImage: {
        width: 100,
        height: 20
    },
    ratingContainer: {
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 8
    },
});

export default DetailScreen;
