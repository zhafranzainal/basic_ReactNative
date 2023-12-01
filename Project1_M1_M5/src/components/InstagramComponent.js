import React from "react";
import { View, Text, Image } from "react-native";
import { Icon } from "react-native-elements";

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

                <Icon name='dots-vertical' type='material-community' size={26} />

            </View >

        </View >
    )

};
