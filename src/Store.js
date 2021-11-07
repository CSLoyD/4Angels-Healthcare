import { combineReducers } from 'redux';

import login from 'modules/login/slices/LoginSlice';

export const rootReducer = combineReducers({
    login,
});