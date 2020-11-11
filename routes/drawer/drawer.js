import * as React from 'react';
import { Text, View } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeStack from '../drawer/home/homeStack';
import AccountStack from '../drawer/account/accountStack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Drawer = createDrawerNavigator();

/**
 * DrawerScreen is the entirety of the application once the user has logged in.
 */
export default function DrawerScreen({ setLoginStatus, route }) {
    return (
        <Drawer.Navigator initialRouteName="Home" drawerPosition="right" drawerType="front" screenOptions={{ headerShown: false }}>
            <Drawer.Screen
                options={{
                    title: 'Home',
                    drawerIcon: () => (
                        <Icon name="home" size={25} color="black" />
                    )
                }}
                name="Home" component={HomeStack}
            />
            <Drawer.Screen
                options={{
                    title: 'Account',
                    drawerIcon: () => (
                        <Icon name="account" size={25} color="black" />
                    )
                }}
                name="Account" component={AccountStack} />
        </Drawer.Navigator>
    );
};