import React from "react";
import { Header, Button, Icon, Left, Right, Body } from "native-base";
import { BODY, HEADER } from "theme";
import { Text } from 'components'

const Headers = (props) => {
    const { left, body, right, bodyText ,navigation} = props;

    return (
        <Header>
            <Text>Header</Text>
        </Header>
    );
};

export default Headers;