import React, { useState } from 'react';
import { Container, Content, Button, Thumbnail, Header, View, Item, Input } from 'native-base';
import { connect, useDispatch } from 'react-redux';
import { Text } from 'components';
import { styles } from '../style';
import { BODY } from "theme";
import { Bubbles } from 'react-native-loader';
import {api} from 'api';
import {reset,assignState} from 'modules/login/slices/LoginSlice';


const ResetPass = (props) => {
    const dispatch = useDispatch();
    const navigation = props.navigation;
    const token = props.TOKEN;
    const employee_id = props.employee_id;

    const [currentpass,setcurrentpass]  = useState('');
    const [newpass,setnewpass]          = useState('');
    const [confirmpass,setconfirmpass]  = useState('');


    const [isSaving,setisSaving]  = useState(false);
    const [errors, setErrors] = useState([]);
    const [isError, setIsErrors] = useState(false);

    const saveChanges = async () => {
        setErrors([]);
        setisSaving(true);
        setIsErrors(false);
        const  body = JSON.stringify({
            CurrentPassword: currentpass,
            NewPassword: newpass,
            ConfirmPassword: confirmpass,
            employee_id: employee_id,
        });

        const response = await  api.post('settings/','resetPassword',body,token);
        let data = await response.json();
        if (response.status ===200) {
            setisSaving(false);
            if (data.ret.status) {
                setIsErrors(true);
                setErrors(data.ret.msg);
                _clear();
            }else{
             setIsErrors(true);
             setisSaving(false);
             setErrors(data.ret.msg);
            }
        } else {
            setisSaving(false);
            dispatch(reset({}));
        }
    }

    const _clear =()=>{
        setcurrentpass('');
        setnewpass('');
        setconfirmpass('');
    }


    let Returns=[];
    if (isError) {
        Returns = errors.map((err, idx) => {
            return (
                <Text danger sm b key={idx} >{err}</Text> 
            )
        })
    }

    return (
        <Container>
            <Header style={{ backgroundColor: BODY.THEME }} androidStatusBarColor={BODY.THEME} noShadow iosBarStyle={'dark-content'}>
                <View style={{ justifyContent: 'center', width: '100%' }}>
                     <Text xb dark style={{ alignSelf: 'flex-start' }}>RESET PASSWORD</Text>
                </View>
            </Header>
            <Content>

                 <View style={[styles.errorCont, { backgroundColor: (isError) ? BODY.bg_LIGHT_GRAY : 'transparent', }]}>
                        {errors.length>1? <Text danger sm b  > Error Saving of changes</Text> : null}
                        {errors.length==1? Returns : null}
                   </View>
                <View style={{ flexDirection: 'column', padding: 10 }}>
                    <Text xb sm dark style={{ alignSelf: 'flex-start' }}> CURRENT PASSWORD</Text>

                    <Item style={[styles.Item,{borderColor: isError && currentpass=="" ? "red":"#000"}]}>
                        <Input placeholder=''  name="currentpass" value={currentpass} onChangeText={(val)=>setcurrentpass(val)} secureTextEntry />
                    </Item>

                    <Text xb sm dark style={{ alignSelf: 'flex-start' }}>NEW PASSWORD</Text>
                    <Item style={[styles.Item,{borderColor: isError && newpass=="" ? "red":"#000"}]}>
                        <Input placeholder=''  name="newpass" value={newpass}  onChangeText={(val)=>setnewpass(val)}  secureTextEntry/>
                    </Item>

                    <Text xb sm dark style={{ alignSelf: 'flex-start' }}>CONFIRM NEW PASSWORD</Text>
                    <Item style={[styles.Item,{borderColor: isError && confirmpass=="" ? "red":"#000"}]}>
                        <Input placeholder='' name="confirmpass" value={confirmpass} onChangeText={(val)=>setconfirmpass(val)}  secureTextEntry/>
                    </Item>

                </View>
            </Content>

            <Button style={[styles.Button, { backgroundColor: BODY.RED_COLOR, borderColor: BODY.RED_COLOR }]} onPress={()=>navigation.navigate("UpdateProfile")}>
                <Text xb>CANCEL</Text>
            </Button>
            <Button style={[styles.Button, { backgroundColor: BODY.MAIN_COLOR, borderColor: BODY.MAIN_COLOR,marginBottom:30 }]} onPress={() => isSaving?null:saveChanges()}>
                {isSaving ? (<Bubbles size={10} color="fff" />)
                 :(<Text light xb> SAVE NEW PASSWORD </Text>)}
            </Button>
        </Container>
    );
}


const getStates = (state)=>{
    return{
        employee_id : state.login.logindata.employee_id,
        TOKEN  : state.login.logindata.token,
        USERDATA  : state.login.logindata,
    }
}
 
export default connect(getStates,null)(ResetPass);

