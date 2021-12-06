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
import ProfileImage from '../components/ProfileImage';
import { DEFAULT_IMAGE_URI } from '../../../api/constants';

const Profile = (props) => {
    const dispatch = useDispatch();
    const navigation = props.navigation;
    const employee_id = props.employee_id;
    const username = props.USERDATA.username;
    const {address,firstname,lastname,phone,email,profile_image}  = props.details;
    const [_username,setusername]  = useState(username);
    const [_firstname,setfirstname]  = useState(firstname);
    const [_lastname,setlastname]  = useState(lastname);
    const [_email,setemail]  = useState(email);
    const [_phone,setphone]  = useState(phone);
    const [_address,setaddress]  = useState(address);

    const [isSaving,setisSaving]  = useState(false);
    const [errors, setErrors] = useState([]);
    const [isError, setIsErrors] = useState(false);
    const [localFile, setLocalFile] = useState(null);

    const saveChanges = async() => {
        setErrors([]);
        setisSaving(true);
        setIsErrors(false);
   
        const body = new FormData();
        if (localFile!==null) {
            let pathParts   = localFile.path.split('/');
            const name = pathParts[pathParts.length - 1];
            let file = {
                   uri  : localFile.path,
                   type : localFile.mime,
                   size : localFile.size,
                   data : localFile.data,
                   name : name,
            }
            body.append('file', JSON.stringify(file));
        }
        body.append('username',_username);
        body.append('firstname',_firstname);
        body.append('lastname',_lastname);
        body.append('email',_email);
        body.append('phone',_phone);
        body.append('address',_address);
        body.append('employee_id',employee_id);

        const response = await api.post('reactapi/','updateProfile',body);
        let data = await response.data;
        if (response.status === 200) {
            setisSaving(false);
            if (data.stat === "Success") {
                setLocalFile(null);
                setIsErrors(true);
                setErrors([data.msg]);
                let newData = {...props.USERDATA}
                newData.username = _username;
                // if (localFile!==null) {
                //     newData.Image = data.ret.filename;
                // }
                await dispatch(assignState({slicekey:'logindata',value:newData}));
                redirection(navigation,'Profile',1000);
            }else{
             setIsErrors(true);
             setisSaving(false);
             setErrors([data.msg]);
            }
        } else {
            setisSaving(false);
            dispatch(reset({}));
        }
    }

    const onFileSelected= (Image)=>{
        setLocalFile(Image);
    }

    let Returns=[];
    if (isError) {; 
        Returns = errors.map((err, idx) => {
                return (
                    <Text sm b key={idx} >{err}</Text>
                )
        })
    }

    return (
        <Container>
            <Header style={{ backgroundColor: BODY.THEME }} androidStatusBarColor={BODY.THEME} noShadow iosBarStyle={'dark-content'}>
                <View style={{ justifyContent: 'center',width:'100%', backgroundColor:'#ededed' }}>
                    <Text xb dark style={{ fontSize: 16, textAlign: 'center' }}>PROFILE UPDATE</Text>
                </View>
            </Header>
            <Content >
               <ProfileImage localFile={localFile} onFileSelected={onFileSelected}  IMAGE={(profile_image !== "") ? profile_image : DEFAULT_IMAGE_URI }/>

                <View style={[styles.errorCont, { backgroundColor: (isError) ? BODY.bg_LIGHT_GRAY : 'transparent', }]}>
                        {isError? Returns : null}
                   </View>
                <View style={{ flexDirection: 'column', padding: 10 }}>

                    <Text xb sm dark style={{ alignSelf: 'flex-start',marginBottom:10 }}>USERNAME</Text>
                    <Item style={[styles.Item,{borderColor: isError && _username=="" ? "red":"#000"}]}>
                        <Input placeholder=''  name="_username" value={_username} onChangeText={(val)=>setusername(val)} />
                    </Item>

                    <Text xb sm dark style={{ alignSelf: 'flex-start',marginBottom:10 }}>FIRST NAME</Text>
                    <Item style={[styles.Item,{borderColor: isError && _firstname=="" ? "red":"#000"}]}>
                        <Input placeholder=''  name="_firstname" value={_firstname} onChangeText={(val)=>setfirstname(val)} />
                    </Item>

                    <Text xb sm dark style={{ alignSelf: 'flex-start',marginBottom:10 }}>LAST NAME</Text>
                    <Item style={[styles.Item,{borderColor: isError && _lastname=="" ? "red":"#000"}]}>
                        <Input placeholder=''  name="_lastname" value={_lastname} onChangeText={(val)=>setlastname(val)} />
                    </Item>

                    <Text xb sm dark style={{ alignSelf: 'flex-start',marginBottom:10 }}>EMAIL ADDRESS</Text>
                    <Item style={[styles.Item,{borderColor: isError && _email=="" ? "red":"#000"}]}>
                        <Input placeholder=''  name="_email" value={_email}  onChangeText={(val)=>setemail(val)} />
                    </Item>

                    <Text xb sm dark style={{ alignSelf: 'flex-start',marginBottom:10 }}>MOBILE NUMBER</Text>
                    <Item style={[styles.Item,{borderColor: isError && _phone=="" ? "red":"#000"}]}>
                        <Input placeholder='' name="mobile" value={_phone} onChangeText={(val)=>setphone(val)} />
                    </Item>

                    <Text xb sm dark style={{ alignSelf: 'flex-start',marginBottom:10 }}>HOME ADDRESS</Text>
                    <Item style={[styles.Item,{borderColor: isError && _address=="" ? "red":"#000"}]}>
                        <Input placeholder='' name="_address" value={_address}  onChangeText={(val)=>setaddress(val)} />
                    </Item>
                    <Item>
                        <Button style={[styles.Button, { backgroundColor: BODY.RED_COLOR, borderColor: BODY.RED_COLOR }]} onPress={()=>navigation.navigate("Profile")}>
                            <Text xb>CANCEL</Text>
                        </Button>
                    </Item>

                    <Item>
                        <Button style={[styles.Button, { backgroundColor: BODY.YELLOW_COLOR, borderColor: BODY.YELLOW_COLOR }]} onPress={()=>navigation.navigate("ResetPass")}>
                            <Text xb>RESET PASSWORD</Text>
                        </Button>
                    </Item>

                    <Item>
                        <Button style={[styles.Button, { backgroundColor: BODY.MAIN_COLOR, borderColor: BODY.MAIN_COLOR }]} onPress={() => isSaving?null:saveChanges()}>
                            {isSaving ? (<Bubbles size={10} color="fff" />)
                            : (<Text light xb> UPDATE PROFILE </Text>)
                            }
                        </Button>
                    </Item>

                </View>
            </Content>

        </Container>
    );
}


const getStates = (state)=>{
    return{
        employee_id : state.login.logindata.employee_id,
        TOKEN       : state.login.logindata.token,
        USERDATA    : state.login.logindata,
        details     : state.profile.details,
    }
}
 
export default connect(getStates,null)(Profile);

