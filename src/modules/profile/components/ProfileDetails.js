import React, { Component } from 'react';
import { TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { View, Button } from 'native-base';
import { Card, Icon } from 'react-native-elements';
import { BODY } from "theme";
import { Text } from 'components';
import { styles } from '../style';
import { DEFAULT_IMAGE_URI } from 'api/constants';
import {reset} from 'modules/login/slices/LoginSlice';

const ProfileDetails = (props) => {
    const dispatch = useDispatch();
    const {details, navigation} = props;
    
    return (
        <Card containerStyle={styles.cardContainer}>
            <View style={styles.container}>
                <ImageBackground
                style={styles.headerBackgroundImage}
                blurRadius={10}
                backgroundColor="#C5C5C5"
                >
                <View style={styles.headerColumn}>
                    <Image
                    style={styles.userImage}
                    source={{uri: details.profile_image!==""?details.profile_image:DEFAULT_IMAGE_URI}}
                    />
                    <Text style={styles.userNameText}>{details.firstname} {details.lastname}</Text>
                    <View style={styles.userAddressRow}>
                    <View>
                        <Icon
                        name="place"
                        underlayColor="transparent"
                        iconStyle={styles.placeIcon}
                        />
                    </View>
                    <View style={styles.userCityRow}>
                        <Text style={styles.userCityText}>
                        {details.address}
                        </Text>
                    </View>
                    </View>
                </View>
                </ImageBackground>
            </View>

            <TouchableOpacity>
                <View style={styles.SubContainers}>
                    <View style={styles.SubIconRow}>
                        <Icon
                        name="call"
                        underlayColor="transparent"
                        iconStyle={styles.SubIcons}
                        />
                    </View>
                    <View style={styles.SubRows}>
                    <View style={styles.SubNumberColumn}>
                        <Text style={styles.SubNumberText}>{details.phone}</Text>
                    </View>
                    </View>
                </View>
            </TouchableOpacity>

            <View style={styles.seperatorContainer}>
                <View style={styles.separatorOffset} />
                <View style={styles.separator} />
            </View>

            <TouchableOpacity>
                <View style={styles.SubContainers}>
                    <View style={styles.SubIconRow}>
                        <Icon
                        name="email"
                        underlayColor="transparent"
                        iconStyle={styles.SubIcons}
                        />
                    </View>
                    <View style={styles.SubRows}>
                    <View style={styles.SubNumberColumn}>
                        <Text style={styles.SubNumberText}>{details.email}</Text>
                    </View>
                    </View>
                </View>
            </TouchableOpacity>

            <View flexDirection="row">
                <Button style={[styles.Button,{ backgroundColor: BODY.MAIN_COLOR, borderColor: BODY.BLACK }]} onPress={() => navigation.navigate('UpdateProfile')}>
                    <Text light xb>UPDATE PROFILE</Text>
                </Button>
            </View>

            <View flexDirection="row">
                <Button style={[styles.Button,{ backgroundColor: BODY.ORANGE_COLOR, borderColor: BODY.ORANGE_COLOR }]} onPress={() => dispatch(reset({}))}>
                    <Text light xb>LOGOUT</Text>
                </Button>
            </View>
        </Card>
    );

}


export default ProfileDetails;