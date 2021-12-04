import {api_url, api_token, reactV} from './constants';
import axios from 'axios';

export  const api = {
   post:(mod,action,params,token='')=> {
      params.append('token',api_token);
      params.append('reactV',reactV);
         return axios({
            url: `${api_url+mod+action}`,
            method: 'POST',
            headers: {Accept: 'application/json','content-type': 'multipart/form-data'},
            data: params,
         });
   },

   // auth:(mod,action,params)=>{
   //    params.token = api_token;
   //    params.reactV = reactV;
   
   //       return fetch(`${api_url+mod+action}`,{
   //          method: 'POST',
   //          headers: { Accept: 'application/json', 'Content-Type': 'application/x-www-form-urlencoded','authstr':'xxx'},
   //          body:JSON.stringify(params)
   //       }); 
   //    },
    
  }

