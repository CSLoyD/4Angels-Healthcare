import React from 'react';
import { RefreshControl } from 'react-native';
import { Text} from 'components';
import { Container,  Header,} from 'native-base';

import {BODY } from "theme";
import { styles } from '../styles';
import CalendarComp from '../components/Calendar';


const schedulesScreen = (props) => {
    return (
        <Container style={styles.Container} refreshControl={
            <RefreshControl
                onRefresh={() => console.log('nice')}
                colors={[BODY.SECONDARY_COLOR]} //android
                tintColor={BODY.SECONDARY_COLOR} //ios
                progressBackgroundColor={'#fff'}
        />
        }>
                <Header style={{ backgroundColor: '#fff' , height: 75, borderBottomWidth: 2,borderBottomColor: '#000'}} androidStatusBarColor={BODY.THEME} noShadow iosBarStyle={'dark-content'}>
                    <Text style={styles.H1} >Schedules</Text>
                </Header> 
                <CalendarComp/>
        </Container>
    );
}



export default schedulesScreen;

