import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../shared/header';
import { globalStyles } from '../styles/global';

// import login screens
import StartScreen from '../screens/StartScreen';

// import seeker screens
import SeekerWaitingScreen from '../screens/seeker/SeekerWaitingScreen';
import SeekerGameScreen from '../screens/seeker/SeekerGameScreen';

// import keeper screens
import KeeperListScreen from '../screens/keeper/KeeperListScreen';
import KeeperGameScreen from '../screens/keeper/KeeperGameScreen';
import KeeperEditorScreen from '../screens/keeper/KeeperEditorScreen';
import KeeperWaitingScreen from '../screens/keeper/KeeperWaitingScreen';

const Stack = createStackNavigator();

/**
 * HomeStack is displayed only when a user is logged in
 */
export default function HomeStack({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerRight: () => <Header navigation={navigation} />,
                headerTitleStyle: globalStyles.titleText,
            }}
        >
            <Stack.Screen name="StartScreen" component={StartScreen} options={{ title: 'StartScreen' }} />

            <Stack.Screen name="SeekerWaitingScreen" component={SeekerWaitingScreen} options={{ title: 'SeekerWaitingScreen' }} />
            <Stack.Screen name="SeekerGameScreen" component={SeekerGameScreen} options={{ title: 'SeekerGameScreen' }} />

            <Stack.Screen name="KeeperListScreen" component={KeeperListScreen} options={{ title: 'KeeperListScreen' }} />
            <Stack.Screen name="KeeperEditorScreen" component={KeeperEditorScreen} options={{ title: 'KeeperEditorScreen' }} />
            <Stack.Screen name="KeeperWaitingScreen" component={KeeperWaitingScreen} options={{ title: 'KeeperWaitingScreen' }} />
            <Stack.Screen name="KeeperGameScreen" component={KeeperGameScreen} options={{ title: 'KeeperGameScreen' }} />
        </Stack.Navigator>
    );
};
