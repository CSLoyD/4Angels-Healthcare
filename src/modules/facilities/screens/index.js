import React, { useEffect } from 'react';
import { RefreshControl } from 'react-native';
import { Text} from 'components';
import { Container, Header} from 'native-base';
import { connect, useDispatch } from 'react-redux';
import {BODY } from "theme";
import { styles } from '../styles';
import HeaderSearch from '../components/FacilitiesList';
import Loading from '../components/LoadingIndicator';
import Search from '../components/Search';
import {getFacilities} from '../slices/FacilitiesSlice';

const FacilitiesScreen = (props) => {
    const navigation = props.navigation;
    const dispatch = useDispatch()
    const {facilitiesDetails,isFetching } = props;

    useEffect(()=>{
        const fetched = navigation.addListener('focus', () => {
            getFacilitiesDetails()
        });
        return fetched;
    },[navigation]);

    const getFacilitiesDetails= async() =>{
        const body = new FormData();
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
                <HeaderSearch data={facilitiesDetails} navigation={navigation}/>
                </>
                
               
            )}
            
        </Container>
    );
}

const getStates = (state)=>{
    return{
        employee_id : state.login.logindata.employee_id,

        facilitiesDetails     : state.facilities.facilitiesDetails,
        isFetching : state.facilities.isFetching,
    }
}

export default connect(getStates,null)(FacilitiesScreen);

