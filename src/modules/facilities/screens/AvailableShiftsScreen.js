import React, { useState , useEffect} from 'react';
import { RefreshControl} from 'react-native';
import { Text} from 'components';
import { Container,  Header,} from 'native-base';
import { connect, useDispatch } from 'react-redux';
import {BODY } from "theme";
import { styles } from '../styles';
import ShiftLists from '../components/ShiftLists';
import Loading from '../components/LoadingIndicator';
import {api} from 'api';


const schedulesScreen = (props) => {
    const navigation = props.navigation;
    const { date, schedID, facID} = props.route.params;
    const dispatch = useDispatch()
    const {schedDetails,isFetching,schedStatus} = props;

    const [isSaving,setisSaving]  = useState(false);

    useEffect(()=>{
            if(typeof schedID === 'undefined') {
                console.log('undefined:')
                // navigation.navigate('AvailableShifts',{
                //     date: date,
                //   })
                //   return;
            }else{
                console.log('defined:')
                requestShift()
            }
 
    },[]);

    const requestShift = async() => {

       
        // setErrors([]);
        setisSaving(true);
        // setIsErrors(false);

        const body = new FormData();

        body.append('FacilityID',facID);
        body.append('ScheduleID',schedID);
        body.append('ScheduleDate',date);

        const response = await api.post('reactapi/','requestShift',body);
        console.log('response:',response)
        let data = await response.data;
        if (response.status === 200) {
            setisSaving(false);
            if (data.stat === "Success") {
                console.log(data);
                console.log('success lage');
                // redirection(navigation,'Profile',1000);
            }else{
            
            setErrors([data.msg]);
            }
        } else {
            console.log('Something Went Wrong');
        }
        setisSaving(false);
    }
    
    

    const cars = [];

    schedDetails.map(function(currentValue, index){
        
        if(currentValue["schedule_date"] == date){
            
            cars.push(currentValue);
        }
    });
    console.log(cars);


    return (
        <Container style={styles.Container} refreshControl={
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
                <ShiftLists data={cars} navigation={navigation}/>
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


