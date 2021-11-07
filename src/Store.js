import { combineReducers } from 'redux';

import login from 'modules/login/slices/';

export const rootReducer = combineReducers({
    login,
});