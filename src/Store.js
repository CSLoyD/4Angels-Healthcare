import { combineReducers } from 'redux';

import login from 'modules/login/slices/LoginSlice';
import profile from 'modules/profile/slices/ProfileSlice';
import facilities from 'modules/facilities/slices/FacilitiesSlice';
import calendarSched from 'modules/facilities/slices/CalendarSlice';
import shifts from 'modules/shifts/slices/ShiftsSlice';

export const rootReducer = combineReducers({
    login,
    profile,
    facilities,
    calendarSched,
    shifts,
});