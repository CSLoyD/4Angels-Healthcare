import React, { useState, useEffect } from 'react';
import { RefreshControl } from 'react-native';
import { Text} from 'components';
import { SearchBar } from 'react-native-elements';
import { Container, SafeAreaView, Content, Header, View, TextInput} from 'native-base';
import { connect, useDispatch } from 'react-redux';
import {BODY } from "theme";
import { styles } from '../styles';
import HeaderSearch from '../components/FacilitiesList';
import Loading from '../components/LoadingIndicator';
import Search from '../components/Search';
import {getFacilities} from '../slices/FacilitiesSlice';
import Footers from 'containers/Footers';

const FacilitiesScreen = (props) => {
    const dispatch = useDispatch()
    const navigation = props.navigation;
    const {facilitiesDetails,isFetching } = props;

    useEffect(()=>{
        const fetched = navigation.addListener('focus', () => {
            _getProfile()
        });
        return fetched;
    },[navigation]);

    const _getProfile = async() =>{
        const body = new FormData();
        body.append('employee_id',props.EMPLOYEE);
        dispatch(getFacilities({body:body,token:props.TOKEN}));
    }

    return (
        <Container style={styles.Container} refreshControl={
            <RefreshControl
                onRefresh={() => console.log('nice')}
                refreshing={isFetching}
                colors={[BODY.SECONDARY_COLOR]} //android
                tintColor={BODY.SECONDARY_COLOR} //ios
                progressBackgroundColor={'#fff'}
        />
        }>
            
            {isFetching ? (
              <Loading />
            ) : (
                <>
                <Header style={{ backgroundColor: '#fff' , height: 75, borderBottomWidth: 2,borderBottomColor: '#000'}} androidStatusBarColor={BODY.THEME} noShadow iosBarStyle={'dark-content'}>
                    <Text style={styles.H1} >Facilities</Text>
                </Header>
                <Search />
                <HeaderSearch data={facilitiesDetails} />
                </>
                
               
            )}
            
        </Container>
    );
}

const getStates = (state)=>{
    return{
        employee_id : state.login.logindata.employee_id,
        TOKEN       : state.login.logindata.token,
        USERDATA    : state.login.logindata,
        facilitiesDetails     : state.facilities.facilitiesDetails,
        isFetching : state.facilities.isFetching,
    }
}

export default connect(getStates,null)(FacilitiesScreen);

