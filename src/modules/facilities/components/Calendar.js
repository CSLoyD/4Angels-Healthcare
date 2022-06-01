import * as React from "react";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {useSelector} from 'react-redux'
import { Alert } from 'react-native';



const CalendarComp = ({data,stat,navigation})  => {

    // if(!data){
    //   Alert.alert(
    //       "Information",
    //       "No Shifts Available on this Facility",
    //       [
    //         {
    //           text: "Ok",
    //           onPress: () => navigation.navigate('Facilities'),
    //           style: "cancel",
    //         },
    //       ],
    //     );
    //   return null
    // } 

    console.log(data);

    const calendar22 = useSelector((state) => state.calendarSched.isFetching);
    console.log(calendar22);
    let markedDay = {};

    if(data){
      data.map((item) => {
        markedDay[item.schedule_date] = {
          selected: true,
          marked: true,
          selectedColor: "blue",
          dotColor: 'blue'
          // selectedColor: "#56BBF1",
          // dotColor: '#FF1818'
        };
      });
    }

    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10) 
    {
        dd='0'+dd;
    } 

    if(mm<10) 
    {
        mm='0'+mm;
    } 
    today = yyyy+'-'+mm+'-'+dd;


    return (
        <Calendar
        datas={today}
        markedDates={ markedDay }
        // markedDates={
        //   {
        //     '2022-04-16': {selected: true, marked: true, selectedColor: 'blue'},
        //     '2022-04-17': {marked: true},
        //     '2022-04-18': {marked: true, dotColor: 'red', activeOpacity: 0},
        //     '2022-04-19': {disabled: true, disableTouchEvent: true}
        //   }}
          // Initially visible month. Default = Date()
          current={today}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2012-05-10'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2030-03-01'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {
            navigation.navigate('AvailableShifts',{
              date: day.dateString,
            })
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'yyyy MM'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={month => {
            console.log('month changed', month);
          }}
          // Hide month navigation arrows. Default = false
          hideArrows={false}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not swich month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
        />
    );
}

function sample(day,datas){
  console.log('selected day', day.dateString);
  console.log('selected day', datas);
  Alert.alert(`Selected: ${day.dateString}`);
}


export default CalendarComp;
