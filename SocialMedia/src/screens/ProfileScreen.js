import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.scroll}>
            <View style={styles.mainContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/images/avatar.png')}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scroll: {
        flexGrow: 1
    },
    mainContainer: {
        flex: 1,
        alignItems: 'center'
    },
    imageContainer: {
        margin: 16
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'black'
    },
});

export default ProfileScreen;
