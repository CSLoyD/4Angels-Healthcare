import React from 'react';
import { Dimensions, Image } from 'react-native';
import { Container, Content, Button, View, Item, Input } from 'native-base';
import { connect, useDispatch } from 'react-redux';
import { styles } from '../styles';
import { Text } from 'components';
import { BODY } from 'theme';
const { width, height } = Dimensions.get('window');

const Registration = (props) => {
    const dispatch = useDispatch()
    const navigation = props.navigation;
    return (
        <Container>
            <Content >
                <Image style={{
                    alignSelf: 'center',
                    height: undefined,
                    aspectRatio: 4 / 4,
                    width: "54%",
                }} source={require('res/images/main-logo.png')} />
                <View style={{ flexDirection: 'column', padding: 10 }}>
                    <Text xb rg dark style={{ alignSelf: 'flex-start', marginLeft: 10 }}>NAME</Text>
                    <Item style={styles.Item}>
                        <Input placeholder='' />
                    </Item>

                    <Text xb rg dark style={{ alignSelf: 'flex-start', marginLeft: 10 }}>EMAIL</Text>
                    <Item style={styles.Item}>
                        <Input placeholder='' />
                    </Item>

                    <Text xb rg dark style={{ alignSelf: 'flex-start', marginLeft: 10 }}>PHONE</Text>
                    <Item style={styles.Item}>
                        <Input placeholder='' />
                    </Item>

                    <Text xb rg dark style={{ alignSelf: 'flex-start', marginLeft: 10 }}>PASSWORD</Text>
                    <Item style={styles.Item}>
                        <Input placeholder='' />
                    </Item>

                    <Text xb rg dark style={{ alignSelf: 'flex-start', marginLeft: 10 }}>CONFIRM PASSWORD</Text>
                    <Item style={styles.Item}>
                        <Input placeholder='' />
                    </Item>
                </View>

                <Button style={[styles.Button, { backgroundColor: BODY.ORANGE_COLOR, borderColor: BODY.ORANGE_COLOR, margin: 0 }]}>
                    <Text light xb>REGISTER NOW</Text>
                </Button>
                <Button style={[styles.Button2, { marginTop: 5 }]} transparent light onPress={() => navigation.navigate('Login')}>
                    <Text xb darkgray>ALREADY HAVE AN ACCOUNT?</Text>
                </Button>
            </Content>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        login: state.login,
    }
}

export default connect(
    mapStateToProps,
    null
)(Registration)


