import React, { useEffect } from 'react';
import { RefreshControl, View} from 'react-native';
import { Text} from 'components';
import { Container,  Header,} from 'native-base';
import { connect, useDispatch } from 'react-redux';
import {BODY } from "theme";
import { styles } from '../styles';
import CalendarComp from '../components/Calendar';
import Loading from '../components/LoadingIndicator';
import {getCalendarSchedules} from '../slices/CalendarSlice';
import { Alert } from 'react-native';


const schedulesScreen = (props) => {
    const navigation = props.navigation;
    const { itemId } = props.route.params;
    const dispatch = useDispatch()
    const {schedDetails,isFetching,schedStatus} = props;


    useEffect(()=>{
        const fetched = navigation.addListener('focus', () => {
            _getCalendarSched()
        });
        return fetched;
    },[navigation]);

    const _getCalendarSched = async() =>{
        const body = new FormData();
        body.append('facility_id',itemId);
        dispatch(getCalendarSchedules({body:body,token:props.TOKEN}));
    }

    return (
        <Container style={{backgroundColor:'#6cc1bd'}} refreshControl={
            <RefreshControl
                onRefresh={() => console.log('nice')}
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
                    <Text style={styles.H1} >Schedules</Text>
                </Header> 
                {(schedStatus == 'Failed') ? (
                 <View style={{flex: 0.1,justifyContent:'center',alignItems:'center'}}>
                     <Text style={{fontWeight:'bold',color:'red'}}>No Available Shifts On This Facility</Text>
                 </View>
                ):(
                <View/>
                )}
                <CalendarComp data={schedDetails} stat={schedStatus} navigation={navigation}/>
                </>  
                 
            )}
               
        </Container>
    );
}

const getStates = (state)=>{
    return{
        employee_id : state.login.logindata.employee_id,
        schedDetails     : state.calendarSched.calendarSchedDetails.datas,
        isFetching : state.calendarSched.isFetching,
        schedStatus : state.calendarSched.calendarSchedDetails.stat
    }
}

export default connect(getStates,null)(schedulesScreen);


