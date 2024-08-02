import React from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { Input } from '../components/InputComponent';
import { Button } from '../components/ButtonComponent';

const ProfileScreen = () => {

    const globalData = useSelector(store => store.profileReducer);

    return (
        <ScrollView contentContainerStyle={styles.scroll}>
            <View style={styles.mainContainer}>

                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/images/avatar.png')}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Input
                        title="Username"
                        editable={false}
                        value={globalData.username}
                    />
                    <Input
                        title="Email"
                        editable={false}
                        value={globalData.email}
                    />
                    <Input
                        title="Password"
                        editable={false}
                        value={globalData.password}
                    />
                </View>

                <Button
                    text="Logout"
                    isLogout={true}
                />

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
    inputContainer: {
        padding: 16,
        width: '100%'
    }
});

export default ProfileScreen;
