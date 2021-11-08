import { createSlice, createAsyncThunk,createAction } from '@reduxjs/toolkit';

const initialState = {
  is_loggedIn  : false,
  logindata    : [],
  loggingOut   :false,
  isFetching   : false,
  isError      : false,
  errorMessage : [],
  return       : null,
  internet_connection : false
}

const LoginSlice = createSlice({
  name: 'login',
  initialState:initialState,
  reducers: {
    // non async reducer
    ADD_STATE:(state, action)=>{
      // "data" object key is required from your component method
      // adding of object to array state
      const data  = action.payload.data
       state[action.payload.slicekey].push(data)
    },
    UPDATE_STATE:(state, action)=> {
         // updating of states using array index or object value (unique id from DB)
         // if is_idx===true the where param is an array index else where is an  object value of array (unique id from DB)
        const {slicekey,is_idx,where,objkey,where_value} = action.payload
         if (is_idx && isObject(objkey)) {
            for (const [key, value] of Object.entries(objkey)) {
               state[slicekey][where][key] = value;
            }
        }else{
          const init_update = state[slicekey].find(init_update => init_update[where] === where_value)
            if (init_update && isObject(objkey)) {
                for (const [key, value] of Object.entries(objkey)) {
                    init_update[key] = value
                }
            }
        }
    },
    FETCH_STATE:(state,action)=>{
      // fetching of json updates from db
      // or asigning of multiple json objects to states (will override the current states )
      const {slicekey,data} =  action.payload
        state[slicekey] = data;
    },
    REMOVE_STATE:(state,action)=>{
         // removing of states using array index or object value (unique id from DB)
         // if is_idx===true the where param is an array index else where is an  object value of array (unique id from DB)
      const {slicekey,where,objkey,is_idx} =  action.payload
      if (is_idx) {
        state = state[slicekey].splice(where, 1);
      }else{
          state[slicekey].map((toRemove,idx)=> {
            if (toRemove[objkey] === where) {
              state = state[slicekey].splice(idx, 1);
            }
          })
      }
    },
    TRUE_FALSE_STATE:(state,action)=>{
        // TOGGLE TRUE /FALSE
      const {slicekey} =  action.payload;
      state[slicekey] = !slicekey
    },
    assignState:(state,action)=>{
      const {slicekey,value} =  action.payload;
            state[slicekey]  = value;
   },
   logOut:(state,action)=>{
            state['is_loggedIn']  = false;
            state['logindata']    = [];
            return state;
   },
   reset: state => initialState,
  },
  extraReducers: {

  },
});

export const { assignState,reset,logOut} = LoginSlice.actions;
export default LoginSlice.reducer;