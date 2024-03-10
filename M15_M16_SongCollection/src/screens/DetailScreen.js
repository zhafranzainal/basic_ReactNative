import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailScreen = ({ route }) => {

    const song = route.params.item;

    useEffect(() => {
        console.log(song);
    }, []);

    return (
        <View>
            <Text>Detail Screen</Text>
        </View>
    )

};

const styles = StyleSheet.create({

});

export default DetailScreen;
