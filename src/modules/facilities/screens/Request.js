import React, { useState , useEffect} from 'react';
import { RefreshControl} from 'react-native';
import { Text} from 'components';
import { PricingCard, colors } from 'react-native-elements';
import { Container, View,  Header, Item, Button,} from 'native-base';
import { connect, useDispatch, useSelector } from 'react-redux';
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

    const counter = useSelector((state) => state.calendarSched.calendarSchedDetails.datas)

    console.log('test',counter)

    const counterArr = [];

    counter.map(function(currentValue, index){
        
        if(currentValue["schedule_id"] == schedID){
            
            counterArr.push(currentValue);
        }
    });
    console.log(counterArr);
    console.log(counterArr[0].schedule_date);

    var start_time = counterArr[0].time_start;
    var end_time = counterArr[0].time_end;

    start_time = convertTime(start_time);
    end_time = convertTime(end_time);

    function convertTime(time){
        // var time = counterArr[0].time_start; // your input

        time = time.split(':'); // convert to array
    
        // fetch
        var hours = Number(time[0]);
        var minutes = Number(time[1]);
        var seconds = Number(time[2]);
    
        // calculate
        var timeValue;
    
        if (hours > 0 && hours <= 12) {
        timeValue= "" + hours;
        } else if (hours > 12) {
        timeValue= "" + (hours - 12);
        } else if (hours == 0) {
        timeValue= "12";
        }
        
        timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
        timeValue += (seconds < 10) ? ":0" + seconds : ":" + seconds;  // get seconds
        timeValue += (hours >= 12) ? " PM" : " AM";  // get AM/PM
    
        // show
        console.log(timeValue);
        return timeValue;
    }

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
                <View style={{flex: 1}} >
                    <View style={{color: 'green',flex: 1,backgroundColor:'red'}} >
                        <View style={{flex: 2, justifyContent: 'center',alignItems: 'center'}}>
                            <Text style={{fontSize: 30}}>{counterArr[0].schedule_date}</Text>
                            <View style={{flexDirection: 'row',alignContent: 'space-around'}}>
                                <Text>{start_time}</Text>
                                <Text>{end_time}</Text>
                            </View>
                        </View>
                        <View style={{flex:1,alignItems: 'center',backgroundColor:'green'}}>
                            <Text style={{fontSize:30}}>Request This Schedule?</Text>
                        </View>
                        <View style={{flex:5,flexDirection: 'row',justifyContent: 'center',backgroundColor:'blue'}}>
                            <Button style={[{ backgroundColor: BODY.RED_COLOR, borderColor: BODY.BLACK,marginRight:30,marginLeft:30,width:100,flex:1,justifyContent: "center",alignItems: "center"}]} onPress={()=>navigation.goBack()}>
                                <Text xb>CANCEL</Text>
                            </Button>
                            <Button style={[{ backgroundColor: BODY.YELLOW_COLOR, borderColor: BODY.BLACK,width:100,flex:1,marginRight:30,justifyContent: "center",alignItems: "center"}]} onPress={() => isSaving?null:requestShift()}>
                                <Text xb style={{textAlignVertical: "center",textAlign: "center"}}>Request</Text>
                            </Button>
                        </View>
                    </View>
                </View>
               

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


