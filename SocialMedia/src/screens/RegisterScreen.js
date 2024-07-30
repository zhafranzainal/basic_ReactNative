import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Input } from '../components/InputComponent';
import { Button } from '../components/ButtonComponent';

const RegisterScreen = (props) => {

    const { navigation } = props;

    return (
        <ScrollView contentContainerStyle={styles.scroll}>
            <View style={styles.mainContainer}>

                <View style={styles.inputContainer}>
                    <Input title="Username" placeholder="Username" />
                    <Input title="Email" placeholder="Email" />
                    <Input title="Password" placeholder="Password" />
                </View>

                <Button text="Register" />

                <View style={styles.textContainer}>

                    <Text style={styles.text}>
                        Already have an account?
                    </Text>

                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.loginText}>
                            Login
                        </Text>
                    </TouchableOpacity>

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
        backgroundColor: '#E6E6FA',
        alignItems: 'center'
    },
    inputContainer: {
        padding: 16,
        width: '100%'
    },
    textContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    text: {
        fontSize: 16
    },
    loginText: {
        color: '#1A5B0A',
        fontSize: 16
    }
});

export default RegisterScreen;
