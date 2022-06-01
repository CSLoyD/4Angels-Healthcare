import React, { useEffect, useState } from 'react';
import {Container, Content} from 'native-base';
import { RefreshControl } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { connect, useDispatch } from 'react-redux';
import { BODY } from "theme";
import ProfileDetails from '../components/ProfileDetails';
import {getProfile} from '../slices/ProfileSlice';

const Profile = (props) => {
    const dispatch = useDispatch();
    const [refreshing,setrefreshing] = useState(false);
    const navigation = props.navigation;
    const {details,isFetching } = props.profile;
    useEffect(()=>{
        const fetched = navigation.addListener('focus', () => {
            _getProfile()
        });
        return fetched;
    },[navigation]);


    const _getProfile = async() =>{
        const body = new FormData();
        body.append('employee_id',props.EMPLOYEE);
        dispatch(getProfile({body:body,token:props.TOKEN}));
    }

    return (
        <>
            <Container backgroundColor='#FFF'>
                <Content refreshControl={
                    <RefreshControl
                        onRefresh={()=>_getProfile()}
                        refreshing={isFetching}
                        colors={[BODY.ORANGE_COLOR]} //android
                        tintColor={BODY.ORANGE_COLOR} //ios
                        progressBackgroundColor={'#fff'}
                    />
                }>
                <ProfileDetails details={details} navigation={navigation} />
                </Content>

            </Container>
            
        </>
    );
}



const getStates = (state)=>{
    return{
        EMPLOYEE    : state.login.logindata.employee_id,
        TOKEN       : state.login.logindata.token,
        USERDATA    : state.login.logindata,
        profile     : state.profile,
    }
}
 
export default connect(getStates,null)(Profile);

