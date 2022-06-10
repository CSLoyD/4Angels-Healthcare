import React, { useState , useEffect} from 'react';
import { RefreshControl, Alert} from 'react-native';
import { Text} from 'components';
import { Container,  Header,} from 'native-base';
import { connect, useDispatch } from 'react-redux';
import {BODY } from "theme";
import { styles } from '../styles';
import ShiftLists from '../components/ShiftLists';
import Loading from '../components/LoadingIndicator';


const schedulesScreen = (props) => {
    const navigation = props.navigation;
    const { date } = props.route.params;
    const dispatch = useDispatch()
    const {schedDetails,isFetching,schedStatus} = props;

    console.log('day',date);
    
    const SchedArr = [];

    schedDetails.map(function(currentValue, index){
        
        if(currentValue["schedule_date"] == date){
            
            SchedArr.push(currentValue);
        }
    });
    console.log(SchedArr);

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
                <ShiftLists data={SchedArr} navigation={navigation}/>
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


