import { PermissionsAndroid, Platform,ToastAndroid} from "react-native";

export const isObject=(data)=>{
    try {
        if(typeof data === 'object' && data !== null){
            return true;
        } else{
            console.error("data must be an object");
        }
    }catch(e) {
            console.log(e);
    }
}

export const truncate= (str, n)=>{
    return (str.length > n) ? str.substr(0, n-1) + '...' : str;
 }


 
 export const hasAndroidPermission= async ()=> {
    const permission = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
     return true;
    }

    const status = await PermissionsAndroid.request(permission,
        {
        title   : 'Permission to access Albums',
        message : 'We need your permission to access your albums!',
        });
    return status === 'granted';
}

export const  timeout= (ms)=> {
    return new Promise(resolve => setTimeout(resolve, ms));
}




