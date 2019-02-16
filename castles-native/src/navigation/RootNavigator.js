import React from "react";
import {
    createDrawerNavigator,
    createSwitchNavigator,
    createAppContainer,
} from "react-navigation";

import App from '../index';

import Icon from 'react-native-vector-icons/MaterialIcons';


import {
    ProfileScreen,
} from '../components/Profile'

import HomeScreen from '../components/Home/HomeScreen'

import SideBar from  '../components/common/SideBar.js';
import CastlesMain from "../components/Castles/CastlesMain";

import SettingsScreen from '../components/Settings/SettingsScreen';

import {CastlesNavigator} from './Castles/CastlesNavigator';

import { View } from 'react-native';

import { Text } from "native-base";
import {styles} from "../assets/styles";
import {colors} from "../assets/variables";

const AuthorizedNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                title: 'Home Page',
                drawerLabel: 'Home Page',
                headerTintColor: 'blue',
            },
        },
        Profile: {
            screen: ProfileScreen,
            drawerLabel: 'My Profile',
        },
        Settings: {
            screen: SettingsScreen,
            drawerLabel: 'Settings',
        },
        Castles: {
            screen: CastlesMain,
            drawerLabel: 'Castles',
        },

    },
    {
        initialRouteName: 'Home',
        // initialRouteName: 'Castles',
        drawerWidth: 300,
        drawerPosition: 'left',
        contentComponent: props => <SideBar {...props} />
    }
);

const UnAuthorizedNavigator = createDrawerNavigator(
    {
        CastlesNavigator: {
            screen: CastlesNavigator,
            navigationOptions: {
                drawerLabel: 'Castles',
                drawerIcon: ({ tintColor }) => (
                    <Icon style={{fontSize: 22, color: tintColor}} name="security" />
                ),
            },
        },
        Settings: {
            screen: SettingsScreen,
            navigationOptions: ({navigation}) => ({
                headerTintColor: 'white',
                drawerLabel: 'Settings',
                drawerIcon: ({ tintColor }) => (
                    <Icon style={{fontSize: 22, color: tintColor}} name="star" />
                ),
                // title: "hello castle",
                // headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
                headerLeft: <Icon name="arrow-back" style={{ paddingLeft: 10, fontSize: 22, color: 'white' }} onPress={() => navigation.goBack()} />,
                headerStyle: {
                    backgroundColor: colors.mainColor,
                },
                headerTitle: <View style={{flexDirection: 'column', paddingLeft: 12}}><Text style={styles.detailHeader}>Filters</Text></View>
            })
        },
    },
    {
        initialRouteName: 'CastlesNavigator',
        drawerWidth: 300,
        drawerPosition: 'left',
        contentComponent:SideBar,
        headerMode: 'screen',
        contentOptions: {
            activeTintColor: colors.activeDrawerColor,
            activeBackgroundColor:'white'
        }
    }
);

const RootNavigator = createSwitchNavigator(
    {
        AuthorizedApplication: { screen: AuthorizedNavigator },
        UnauthorizedApplication: { screen: UnAuthorizedNavigator },
        AppBootstrap : App
    },
    {
        initialRouteName: 'AppBootstrap'
    }
);

export default createAppContainer(RootNavigator);
