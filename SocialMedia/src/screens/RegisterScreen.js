import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Input } from '../components/InputComponent';
import { Button } from '../components/ButtonComponent';
import { useDispatch, useSelector } from 'react-redux';
import { createProfile } from '../../store/actions/profileAction';

const RegisterScreen = (props) => {

    const { navigation } = props;
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    });

    const onChangeInput = (inputType, value) => {
        setForm({
            ...form,
            [inputType]: value
        });
    };

    useEffect(() => {
        console.log('LOCAL STATE');
        console.log('username: ' + form.username);
        console.log('email: ' + form.email);
        console.log('password: ' + form.password);
    }, [form]);

    const sendData = () => {
        if (form.username === '' || form.email === '' || form.password === '') {
            alert('Make sure you fill all the fields with the right information!');
        }
        else {
            dispatch(createProfile(form));
        }
    };

    const globalProfileData = useSelector(store => store.profileReducer);

    useEffect(() => {
        console.log('GLOBAL STATE ON REGISTER PAGE');
        console.log(globalProfileData);
    }, [globalProfileData]);

    return (
        <ScrollView contentContainerStyle={styles.scroll}>
            <View style={styles.mainContainer}>

                <View style={styles.inputContainer}>

                    <Input
                        title="Username"
                        placeholder="Username"
                        onChangeText={(text) => onChangeInput('username', text)}
                    />

                    <Input
                        title="Email"
                        placeholder="Email"
                        onChangeText={(text) => onChangeInput('email', text)}
                    />

                    <Input
                        title="Password"
                        placeholder="Password"
                        onChangeText={(text) => onChangeInput('password', text)}
                    />

                </View>

                <Button
                    text="Register"
                    onPress={() => sendData()}
                />

                <View style={styles.textContainer}>

                    <Text style={styles.text}>
                        Already have an account?
                    </Text>

                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.loginText}> Login</Text>
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
