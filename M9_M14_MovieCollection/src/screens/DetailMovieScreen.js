import { View, Text } from 'react-native';
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
        <View>
            <Text>Detail Movie</Text>
        </View>
    )

}

export default DetailMovieScreen;
