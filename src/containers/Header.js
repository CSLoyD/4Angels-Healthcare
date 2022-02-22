import React, { useState } from "react";
import { Header, Icon, Fab } from "native-base";
import { BODY, HEADER } from "theme";
import { Text } from 'components'

const MainHeader =({props})=>{
    const { navigation } = props;
    const [state,setState] = useState(false);

    return (
        <Header>
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
        </Header>
    );
}


export default MainHeader;