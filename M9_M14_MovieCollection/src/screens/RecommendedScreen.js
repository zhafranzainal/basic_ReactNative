import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { ShowMovie } from '../components/MovieComponent';

const RecommendedScreen = ({ route }) => {

    const sortedRecommended = route.params.allRecommended;

    return (
        <View>
            <FlatList
                contentContainerStyle={styles.mainContainer}
                data={sortedRecommended}
                keyExtractor={(item) => item.id}
                numColumns={2}
                key={2}
                renderItem={({ item }) => {
                    return (
                        <ShowMovie
                            image={{ uri: item.imageLink }}
                            title={item.title}
                            isRecommended={true}
                            rating={item.rating}
                        />
                    )
                }}
            />
        </View>
    )

};

const styles = StyleSheet.create({
    mainContainer: {
        padding: 8
    }
});

export default RecommendedScreen;
