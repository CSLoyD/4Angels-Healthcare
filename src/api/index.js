import {api_url} from './constants';

export  const api = {
    auth:(mod,action,params)=>{
            let param  = 'param='+ encodeURI(params);
                param  = param.replace(/&+$/, ''); 
             return fetch(`${api_url+mod+action}`,{
                method: 'POST',
                headers: {Accept: 'application/json','Content-Type': 'application/x-www-form-urlencoded','AuthStr':'xxx'},
                body:param
             }); 
    },
    post:(mod,action,params,token='')=>{
       let param  = 'param='+ encodeURI(params);
       param  = param.replace(/&+$/, ''); 
         return fetch(`${api_url+mod+action}`,{
            method: 'POST',
            headers: {Accept: 'application/json','Content-Type': 'application/x-www-form-urlencoded','authstr':token},
            body:param
         }); 
    },

    postfile:(mod,action,params,token='')=>{
         return fetch(`${api_url+mod+action}`,{
            method: 'POST',
            headers: {Accept: 'application/json','Content-Type': 'multipart/form-data','authstr':token},
            body:params
         }); 
    },
    
  }

