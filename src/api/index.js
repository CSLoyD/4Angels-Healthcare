import {api_url, api_token, reactV} from './constants';

export  const api = {
    auth:(mod,action,params)=>{
      params.token = api_token;
      params.reactV = reactV;

         return fetch(`${api_url+mod+action}`,{
            method: 'POST',
            headers: { Accept: 'application/json', 'Content-Type': 'application/x-www-form-urlencoded'},
            body:JSON.stringify(params)
         }); 
    },
    post:(mod,action,params,token='')=>{
      params.token = api_token;
      params.reactV = reactV;
         return fetch(`${api_url+mod+action}`,{
            method: 'POST',
            headers: {Accept: 'application/json','Content-Type': 'application/x-www-form-urlencoded','authstr':token},
            body:JSON.stringify(params)
         }); 
    },

    postfile:(mod,action,params,token='')=>{
      params.token = api_token;
      params.reactV = reactV;
         return fetch(`${api_url+mod+action}`,{
            method: 'POST',
            headers: {Accept: 'application/json','Content-Type': 'multipart/form-data','authstr':token},
            body:JSON.stringify(params)
         }); 
    },
    
  }

