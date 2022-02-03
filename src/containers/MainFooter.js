import React, { useState } from "react";
import { Footer, Button, Icon, Fab } from "native-base";
import { BODY, HEADER } from "theme";
import { Text } from 'components'
import { FOOTER } from 'theme';

const MainFooter =({props})=>{
    const { navigation } = props;
    const [state,setState] = useState(false);

    return (
        <Footer style={{backgroundColor:'transparent'}}>

            <Fab
                active={state}
                direction="up"
                containerStyle={{}}
                style={{backgroundColor:'blue'}}
                position="bottomLeft"
                onPress={() => navigation.navigate('Home')}>
                <Icon name="home" />
            </Fab>

            <Fab
                active={state}
                direction="up"
                containerStyle={{}}
                style={{backgroundColor:'blue'}}
                position="bottomRight"
                onPress={() => navigation.navigate('Profile')}>
                <Icon name="user" type="AntDesign" />
            </Fab>
        </Footer>
    );
}

export default MainFooter;