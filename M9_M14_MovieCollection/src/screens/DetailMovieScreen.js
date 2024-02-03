import { View, Text } from 'react-native';
import React, { useEffect } from 'react';

const DetailMovieScreen = (props) => {

    const { route } = props;
    const movie = route.params.item;

    useEffect(() => {
        console.log(movie);
    }, []);

    return (
        <View>
            <Text>Detail Movie</Text>
        </View>
    )

}

export default DetailMovieScreen;
