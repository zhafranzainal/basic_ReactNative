import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { Feed } from '../components/InstagramComponent';

const InstagramHomeScreen = () => {
    return (
        <View style={{ flex: 1 }}>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>

                <Text style={{
                    fontFamily: 'StyleScript-Regular',
                    fontSize: 40,
                    marginLeft: 16
                }}>
                    Instagram
                </Text>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 8
                }}>

                    <View style={{ margin: 8 }}>
                        <Icon name='plus-square-o' type='font-awesome' size={26} />
                    </View>

                    <View style={{ margin: 8 }}>
                        <Icon name='heart-o' type='font-awesome' size={26} />
                    </View>

                    <View style={{ margin: 8 }}>
                        <Icon name='paper-plane-outline' type='ionicon' size={26} />
                    </View>

                </View>

            </View >

            <View style={{ flex: 1 }}>
                <ScrollView>

                    <Feed
                        profile={require('../../assets/images/profilePicture1.png')}
                        username='catherine'
                        post={{ uri: 'https://i.ibb.co/bLz74hj/psyduck.png' }}
                    />

                    <Feed
                        profile={require('../../assets/images/profilePicture2.png')}
                        username='brad'
                        post={{ uri: 'https://i.ibb.co/GQBLC7r/bulbasaur.png' }}
                    />

                    <Feed
                        profile={require('../../assets/images/profilePicture3.png')}
                        username='cindy'
                        post={{ uri: 'https://wallpaperaccess.com/full/496881.jpg' }}
                    />

                    <Feed
                        profile={require('../../assets/images/profilePicture4.png')}
                        username='jeffchang'
                        post={{ uri: 'https://images5.alphacoders.com/316/316297.jpg' }}
                    />

                    <Feed
                        profile={require('../../assets/images/profilePicture5.png')}
                        username='syafiyyah'
                        post={{ uri: 'https://wallpaperaccess.com/full/1403923.jpg' }}
                    />

                </ScrollView>
            </View>

        </View >
    )
};

export default InstagramHomeScreen;
