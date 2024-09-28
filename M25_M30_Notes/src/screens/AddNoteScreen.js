import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

import realm from '../../store/realm';

const AddNoteScreen = () => {

    const [tempNote, setTempNote] = useState('');

    const saveNote = (newNote) => {

        const allData = realm.objects('Note');
        const dataLength = allData.length;
        let newId;

        if (dataLength === 0) {
            newId = 1;
        } else {
            newId = allData[dataLength - 1].id + 1;
        }

        if (newNote !== '') {

            realm.write(() => {
                realm.create("Note", {
                    id: newId,
                    note: newNote
                });
            });

            alert('Successfully saved your note!');
            console.log(allData);

        } else {
            alert('Empty note!');
        }

    };

    return (
        <View style={styles.mainContainer}>

            <View style={styles.headerContainer}>

                <Text style={styles.title}>Create</Text>

                <TouchableOpacity style={styles.button}>
                    <Icon
                        name="check"
                        type="font-awesome-5"
                        size={18}
                        onPress={() => saveNote(tempNote)}
                    />
                </TouchableOpacity>

            </View>

            <Text style={styles.date}>Date</Text>

            <TextInput
                multiline
                placeholder="Write here"
                style={styles.input}
                onChangeText={(text) => setTempNote(text)}
            />

        </View>
    );

}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    headerContainer: {
        padding: 8,
        backgroundColor: 'moccasin',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
        padding: 8,
        fontWeight: 'bold'
    },
    button: {
        padding: 8
    },
    date: {
        paddingTop: 16,
        paddingLeft: 16
    },
    input: {
        fontSize: 16,
        flex: 1,
        paddingRight: 16,
        paddingLeft: 16,
        textAlignVertical: 'top'
    }
});

export default AddNoteScreen;
