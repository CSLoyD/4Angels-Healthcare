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


 
 export const hasFilePermission= async ()=> {
    const permission = [PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE];
    const hasPermission = await PermissionsAndroid.check(permission);
    return (hasPermission)?true:await PermissionsAndroid.requestMultiple(permission);
 }
    export const hasCameraPermission = async ()=> {
        const permission = PermissionsAndroid.PERMISSIONS.CAMERA;
        const hasPermission = await PermissionsAndroid.check(permission);
        return (hasPermission)?true:await PermissionsAndroid.request(permission);
    }

export const timeout= (ms)=> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const redirection = (navigation,page,ms) => {
    return setTimeout(() => {
        navigation.navigate(page);
        }, ms);
}
