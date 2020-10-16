import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeStack from '../routes/homeStack';
import AccountStack from '../routes/accountStack';

const Drawer = createDrawerNavigator();

/**
 * DrawerScreen is the entirety of the application once the user has logged in. 
 */
export default function DrawerScreen({ setLoginStatus, route }) {
    return (
        <Drawer.Navigator initialRouteName="Home" drawerPosition="right" drawerType="front">
            <Drawer.Screen name="Home" component={HomeStack} />
            <Drawer.Screen name="Account" component={AccountStack} />
        </Drawer.Navigator>
    );
};