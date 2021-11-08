import React, { useEffect, useState } from 'react';
import Routes from './Routes';
import AsyncStorage from '@react-native-community/async-storage';
import { rootReducer } from './Store';
import { Provider } from 'react-redux';
import { StatusBar, Platform } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import OfflineModal from 'containers/OfflineModal';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import SplashScreen from 'react-native-splash-screen';
import FlashMessage from 'react-native-flash-message';


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['login'],
    timeout: null
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
})

const persistor = persistStore(store);

export default () => {
    const [isOnline, setIsOnline] = useState(false);
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    useEffect(() => {
        if(Platform.OS === 'android') {
            NetInfo.addEventListener(isConnected => {
                if(isConnected.isConnected) {
                    setIsOnline(true);
                } else {
                    setIsOnline(false);
                }
            });
        }
    }, []);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <React.Fragment>
                    {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
                    {isOnline ? (<Routes />) : (<OfflineModal />)}
                    <FlashMessage position="top" /> 
                </React.Fragment>
            </PersistGate>
        </Provider>
    );
}