import * as React from "react";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { Alert } from 'react-native';


const CalendarComp = ()  => {
    return (
        <Calendar
        markedDates={{
            '2022-04-16': {selected: true, marked: true, selectedColor: 'blue'},
            '2022-04-17': {marked: true},
            '2022-04-18': {marked: true, dotColor: 'red', activeOpacity: 0},
            '2022-04-19': {disabled: true, disableTouchEvent: true}
          }}
          // Initially visible month. Default = Date()
          current={'2022-03-01'}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2012-05-10'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2023-03-01'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={day => {
            console.log('selected day', day.dateString);
            Alert.alert(`Selected: ${day.dateString}`);
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

export default CalendarComp;
