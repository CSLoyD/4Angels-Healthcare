import React, { useState } from 'react';
import { RefreshControl } from 'react-native';
import { Container, Fab, Icon, Content} from 'native-base';
import { connect, useDispatch } from 'react-redux';
import {BODY } from "theme";
import { styles } from '../styles';
import Menu from '../components/Menu';
import Footers from 'containers/Footers';

// Temporary Logout
import {reset} from 'modules/login/slices/LoginSlice';

const Home = (props) => {
    const dispatch = useDispatch()
    const [refreshing, setrefreshing] = useState(false);
    const navigation = props.navigation;
    const [state,setState] = useState(false);

    return (
        <Container style={styles.Container}>
            <Content refreshControl={
                <RefreshControl
                    onRefresh={() => console.log('RefreshControl')}
                    refreshing={refreshing}
                    colors={[BODY.SECONDARY_COLOR]} //android
                    tintColor={BODY.SECONDARY_COLOR} //ios
                    progressBackgroundColor={'#fff'}
                />
            }>
                <Menu />
            </Content>
            
            <Footers navigation={navigation} />

        </Container>
    );
}


export default Home;

