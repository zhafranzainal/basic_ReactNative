import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const Button = (props) => {

    const { text, isLogout } = props;

    return (
        <View style={[
            styles.buttonContainer,
            { backgroundColor: isLogout ? '#F87B7B' : '#CAE3BB' }
        ]}>
            <TouchableOpacity style={styles.button} {...props}>
                <Text style={styles.text}>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    );

};

const styles = StyleSheet.create({

    buttonContainer: {
        width: '40%',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        margin: 16,
    },

    button: {
        padding: 8
    },

    text: {
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }

});
