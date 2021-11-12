import React, { useState } from 'react';
import { Dimensions, Image } from 'react-native';
import { NativeBaseProvider, Container, Content, Button, View, Item, Input } from 'native-base';
import { connect, useDispatch } from 'react-redux';
import { styles } from '../styles';
import { Text } from 'components';
import { BODY } from '../../../theme';
import { Bubbles } from 'react-native-loader';
import {api} from 'api';
import {assignState} from '../slices/LoginSlice';

const { width, height } = Dimensions.get('window');

// data to be retrive in server after success login  
const userdata = {
    Name: 'Proweaver Test',
    Email: "prospteam@gmail.com",
    token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOjg0LCJpYXQiOjE2MjM4NzE0NjksImV4cCI6MTYyMzk1Nzg2OX0.diEy3i_pqKEZ877c6Whbb9G7nBoQPeZtPFymVHf7D5o",
}

const Login = (props) => {

    const dispatch = useDispatch()
    const navigation = props.navigation;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [isError, setIsErrors] = useState(false);
    const [isFetching, setIsFetching] = useState(false);

    const _login = async() => {
        setIsFetching(true);
        setIsErrors(false);
        const body = JSON.stringify({
            "username": username,
            "password": password,
        });
        const response = await  api.auth('reactapi/','LoginEmployee',body);
        let data = await response.json();
        if (response.status ===200) {
            if(data.stat === "Success") {
                setIsFetching(false);
                await dispatch(assignState({slicekey:'logindata',value:data.datas}));
                await dispatch(assignState({slicekey:'is_loggedIn',value:true}));
            } else {
                setIsErrors(true);
                setErrors([data.msg]);
                setIsFetching(false);
            }
        } else {
            setIsErrors(true);
            setErrors([data.msg]);
            setIsFetching(false);
        }
    }

    let Errors = [];
    if (isError) {
        Errors = errors.map((err, idx) => {
            return (
                <Text danger sm b key={idx} >{err}</Text>
            )
        })
    }
        
    return (
        <Container>
            <Content>
                <View style={{ height: height - (height * 0.1) }}>
                    <Image style={styles.logo} source={require('res/images/main-logo.png')} />
                    <View style={[styles.errorCont, { backgroundColor: (isError) ? BODY.bg_LIGHT_GRAY : 'transparent', }]}>
                        {isError ? Errors : null}
                    </View>
                    <View style={{ flex: 1, backgroundColor: BODY.MAIN_COLOR, marginTop: 30, borderTopRightRadius: 50, borderTopLeftRadius: 50 }}>
                        <View style={{flexDirection: 'column', padding: 10, marginTop: 60 }}>
                            {/* <Text xb rg dark style={{ alignSelf: 'flex-start', marginLeft: 10 }}>Username</Text> */}
                            <Item style={styles.Item}>
                                <Input placeholderTextColor='white' placeholder='Username/Email' value={username} name="username" onChangeText={val => setUsername(val)} />
                            </Item>

                            {/* <Text xb rg dark style={{ alignSelf: 'flex-start', marginTop: 10, marginLeft: 10 }}>PASSWORD</Text> */}
                            <Item style={styles.Item}>
                                <Input placeholderTextColor='white' placeholder='Password' value={password} name="password" onChangeText={val => setPassword(val)}  secureTextEntry/>
                            </Item>
                            {/* <Button style={[styles.Button2, { margin: 0, width: "50%" }]} transparent light>
                                <Text light>Forgot Password?</Text>
                            </Button> */}
                        </View>
                        <Button style={[styles.Button, { backgroundColor: '#fff', borderColor: '#fff' }]} onPress={() => _login()}>
                            {isFetching ? (<Bubbles size={10} color="fff" />) 
                            :(<Text dark xb>Login</Text>)
                            }
                        </Button>
                        <View style={{ justifyContent: 'space-between' }}>
                            <Button style={[styles.Button2, { margin: 0, width: "50%" }]} transparent light onPress={() => navigation.navigate('Registration')}>
                                <Text light>Create New Account</Text>
                            </Button>
                        </View>
                    </View>

                </View>
            </Content>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        login: state.login,
    }
}

export default connect(
    mapStateToProps,
    null
)(Login)