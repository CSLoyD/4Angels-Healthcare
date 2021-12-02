import { combineReducers } from 'redux';

import login from 'modules/login/slices/LoginSlice';
import profile from 'modules/profile/slices/ProfileSlice';

export const rootReducer = combineReducers({
    login,
    profile,
});