import React, { useState, useRef } from 'react';
import { Thumbnail, View, Icon } from 'native-base';
import { TouchableOpacity, Image } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { Text } from 'components';
import { styles } from '../style';
import { BODY, HEADER } from "theme";
import ImagePicker from 'react-native-image-crop-picker';
import { DEFAULT_IMAGE_URI } from 'api/constants';
import RBSheet from "react-native-raw-bottom-sheet";



const ProfileImage = (props) => {
    const dispatch = useDispatch();
    const refRBSheet = useRef();
    const {navigation,onFileSelected,IMAGE,localFile} = props;
    const options = [
        {
            name: 'Take from camera',
            icon: <Icon color={BODY.bg_LIGHT_GRAY} size={21} name="camera" />,
            onPress: () => {
                ImagePicker.openCamera({
                    width: 300,
                    height: 300,
                    cropping: true,
                    freeStyleCropEnabled: true,
                    cropperCircleOverlay: true,
                    includeBase64: true,
                })
                    .then((image) => {
                        onFileSelected(image);
                        refRBSheet.current.close();
                    })
                    .catch((error) => { });
            },
        },
        {
            name: 'Choose from Gallery',
            icon: <Icon name="image" color={BODY.bg_LIGHT_GRAY} size={21} />,
            onPress: () => {
                ImagePicker.openPicker({
                    width: 300,
                    height: 300,
                    cropping: true,
                    freeStyleCropEnabled: true,
                    cropperCircleOverlay: true,
                    includeBase64: true,
                })
                    .then((image) => {
                        console.log(image);
                        onFileSelected(image);
                        refRBSheet.current.close();
                    })
                    .catch((error) => { });
            },
        },
    ];

    return (
        <>
            <View style={styles.container}>
                <Thumbnail
                    style={[styles.Thumbnail, { marginBottom: 10 }]}
                    source={{ uri: localFile!==null? localFile.path : (IMAGE!==null? IMAGE: DEFAULT_IMAGE_URI)}} />
                <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                    <Text center b dark style={{ color: '#4361ee' }}>UPDATE DISPLAY PHOTO</Text>
                </TouchableOpacity>
            </View>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={190}
                openDuration={100}
                customStyles={{
                    container: {
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                    },
                }}
            >
                <View style={styles.optionsWrapper}>
                    {options.map(({ name, onPress, icon }) => (
                        <TouchableOpacity
                            onPress={onPress}
                            style={styles.pickerOption}
                            key={name}>
                            {icon}
                            <Text center b style={{ paddingLeft: 20 }}>{name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </RBSheet>
        </>
    );
}


export default ProfileImage;

