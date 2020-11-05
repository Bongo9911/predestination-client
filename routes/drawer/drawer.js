import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeStack from '../drawer/home/homeStack';
import AccountStack from '../drawer/account/accountStack';

const Drawer = createDrawerNavigator();

/**
 * DrawerScreen is the entirety of the application once the user has logged in. 
 */
export default function DrawerScreen({ setLoginStatus, route }) {
    return (
        <Drawer.Navigator initialRouteName="Home" drawerPosition="right" drawerType="front" screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Home" component={HomeStack} />
            <Drawer.Screen name="Account" component={AccountStack} />
        </Drawer.Navigator>
    );
};