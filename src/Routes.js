// Import React Libaries
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from  '@react-navigation/stack';

import { initial_screen, main_screen } from './Screens';

import { connect } from 'react-redux';
import { BODY } from 'theme';
import { Text } from 'components';

const Stack = createStackNavigator();
StatusBar.setHidden(false);

// Login / Register Screens
const InitialScreen = initial_screen.map((screen, idx) => {
    return (
        <Stack.Screen 
        key={idx} 
        name={screen.name} 
        component={screen.component} 
        options={({ route, navigation }) => ({
            header: () => null,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        })} />
    )
});

//  Main Screens
const MainScreen = main_screen.map((screen, idx) => {
    if(screen.header) {
        return (
            <Stack.Screen
            key={idx}
            name={screen.name}
            component={screen.component}
            options={({ route, navigation }) => ({
                headerStyle: {
                    backgroundColor: BODY.bg_LIGHT_GRAY,
                    borderColor: 'transparent',
                    elevation: 0
                }
            })} />
        )
    } else {
        return (
            <Stack.Screen
            key={idx}
            name={screen.name}
            component={screen.component}
            options={({ route, navigation }) => ({
                header: () => null,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            })} />
        )
    }
});


//  Check if logged In for Screen Routing 
const Routes = (props) => {
    let is_loggedIn = props.login.is_loggedIn;
    return (
        <NavigationContainer onStateChange={state => state.index == 0 ? StatusBar.setHidden(false) : StatusBar.setHidden(false) } >
            <Stack.Navigator headerMode='screen'>
                {
                    is_loggedIn ? <> {MainScreen} </> : InitialScreen
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const mapStateProps = (state) => {
    return {
        login: state.login
    }
}

export default connect(mapStateProps, null)(Routes);