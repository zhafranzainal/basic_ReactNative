import React from "react";
import { View, Text, Image } from "react-native";
import { Icon } from "@rneui/themed";
import { FontAwesome } from "@react-native-vector-icons/fontawesome";

export const Feed = (props) => {

    const { profile, username, post } = props;

    return (
        <View>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: 8
            }}>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>

                    <Image

                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 100
                        }}

                        source={profile}

                    />

                    <Text style={{
                        marginLeft: 8,
                        fontWeight: 'bold'
                    }}>
                        {username}
                    </Text>

                </View >

                <Icon name='dots-vertical' type='material-design' size={26} />

            </View >

            <Image

                style={{
                    width: '100%',
                    height: 300
                }}

                source={post}

            />

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>

                <View style={{ flexDirection: 'row' }}>

                    <View style={{ margin: 8 }}>
                        <FontAwesome name='heart' size={26} color='red' style={{ margin: 8 }} />
                    </View>

                    <View style={{ margin: 8 }}>
                        <FontAwesome name='comment' size={26} color='black' style={{ margin: 8 }} />
                    </View>

                    <View style={{ margin: 8 }}>
                        <FontAwesome name='paper-plane' size={26} color='black' style={{ margin: 8 }} />
                    </View>

                </View>

                <View style={{ margin: 8 }}>
                    <FontAwesome name='bookmark' size={26} color='black' style={{ margin: 8 }} />
                </View>

            </View >

        </View >
    )

};

export const Story = (props) => {

    const { profile, username } = props;

    return (
        <View style={{ marginRight: 8, alignItems: 'center' }}>

            <Image

                style={{
                    width: 80,
                    height: 80,
                    borderRadius: 100
                }}

                source={profile}

            />

            <Text>{username}</Text>

        </View>
    )

};
