import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import { data } from '../../data/Data';

const HomeScreen = () => {
    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.flatListContainer}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.mainContainer}>

                            <View style={styles.topContainer}>

                                <Image
                                    style={styles.profilePicture}
                                    source={{ uri: item.profilePicture }}
                                />

                                <View style={styles.normalMarginLeft}>
                                    <Text style={styles.text}>
                                        {item.username}
                                    </Text>
                                </View>

                            </View>

                            <Image
                                style={styles.image}
                                source={{ uri: item.imageLink }}
                            />

                            <View style={styles.captionContainer}>
                                <Text style={styles.text}>

                                    {item.username}

                                    <Text style={styles.caption}> {item.caption}</Text>

                                </Text>
                            </View>

                            <View style={styles.bottomContainer}>

                                <TouchableOpacity style={styles.horizontalContainer}>
                                    <Icon name='heart-o' type='font-awesome' size={20} />
                                    <View style={styles.normalMarginLeft}>
                                        <Text>Like</Text>
                                    </View>
                                </TouchableOpacity>

                                <View style={styles.horizontalContainer}>
                                    <Icon name='comments-o' type='font-awesome' size={20} />
                                    <View style={styles.normalMarginLeft}>
                                        <Text>Comment</Text>
                                    </View>
                                </View>

                            </View>

                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    flatListContainer: {
        padding: 8
    },
    mainContainer: {
        backgroundColor: 'white',
        margin: 8,
        borderRadius: 10
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 8
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 100
    },
    normalMarginLeft: {
        marginLeft: 8
    },
    image: {
        width: '100%',
        height: 300
    },
    captionContainer: {
        margin: 8,
        flex: 1
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'justify'
    },
    caption: {
        fontWeight: 'normal'
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 8,
        marginBottom: 8
    },
    horizontalContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default HomeScreen;
