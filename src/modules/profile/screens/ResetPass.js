import React, { useState } from 'react';
import { Container, Content, Button, Thumbnail, Header, View, Item, Input } from 'native-base';
import { connect, useDispatch } from 'react-redux';
import { Text } from 'components';
import { styles } from '../style';
import { BODY } from "theme";
import { Bubbles } from 'react-native-loader';
import {api} from 'api';
import {redirection} from 'api/helpers';
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
        const body = new FormData();
        body.append('employee_id',employee_id);
        body.append('currentPass',currentpass);
        body.append('newPass',newpass);
        body.append('confPass',confirmpass);

        const response = await api.post('reactapi/','profileUpdatePass',body);
        let data = await response.data;
        if (response.status ===200) {
            setisSaving(false);
            if (data.stat === "Success") {
                setIsErrors(true);
                setErrors([data.msg]);
                _clear();
                redirection(navigation,'Profile',1000);
            } else {
                setIsErrors(true);
                setisSaving(false);
                setErrors([data.msg]);
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
                <View style={{ justifyContent: 'center',width:'100%', backgroundColor:'#ededed' }}>
                    <Text xb dark style={{ fontSize: 16, textAlign: 'center' }}>RESET PASSWORD</Text>
                </View>
            </Header>
            <Content>

                <View style={[styles.errorCont, { backgroundColor: (isError) ? BODY.bg_LIGHT_GRAY : 'transparent', }]}>
                    {isError? Returns : null}
                </View>
                <View style={{ flexDirection: 'column', padding: 10 }}>
                    <Text xb sm dark style={{ alignSelf: 'flex-start',marginBottom:10 }}> CURRENT PASSWORD</Text>

                    <Item style={[styles.Item,{borderColor: isError && currentpass=="" ? "red":"#000"}]}>
                        <Input placeholder=''  name="currentpass" value={currentpass} onChangeText={(val)=>setcurrentpass(val)} secureTextEntry />
                    </Item>

                    <Text xb sm dark style={{ alignSelf: 'flex-start',marginBottom:10 }}>NEW PASSWORD</Text>
                    <Item style={[styles.Item,{borderColor: isError && newpass=="" ? "red":"#000"}]}>
                        <Input placeholder=''  name="newpass" value={newpass}  onChangeText={(val)=>setnewpass(val)}  secureTextEntry/>
                    </Item>

                    <Text xb sm dark style={{ alignSelf: 'flex-start',marginBottom:10 }}>CONFIRM NEW PASSWORD</Text>
                    <Item style={[styles.Item,{borderColor: isError && confirmpass=="" ? "red":"#000"}]}>
                        <Input placeholder='' name="confirmpass" value={confirmpass} onChangeText={(val)=>setconfirmpass(val)}  secureTextEntry/>
                    </Item>

                </View>
            </Content>

            <Button style={[styles.Button, { backgroundColor: BODY.RED_COLOR, borderColor: BODY.BLACK }]} onPress={()=>navigation.navigate("UpdateProfile")}>
                <Text xb>CANCEL</Text>
            </Button>
            <Button style={[styles.Button, { backgroundColor: BODY.MAIN_COLOR, borderColor: BODY.BLACK,marginBottom:30 }]} onPress={() => isSaving?null:saveChanges()}>
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

