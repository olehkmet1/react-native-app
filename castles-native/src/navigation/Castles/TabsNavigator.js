import {createAppContainer, createBottomTabNavigator} from "react-navigation";
import AboutTab from "../../components/Castles/Details/Tabs/AboutTab";
import {colors} from "../../assets/variables";
import HistoryTab from "../../components/Castles/Details/Tabs/HistoryTab";
import GalleryTab from "../../components/Castles/Details/Tabs/GalleryTab";
import LocationTab from "../../components/Castles/Details/Tabs/LocationTab";
import Icon from 'react-native-vector-icons/MaterialIcons';

import React from "react";

const TabsNavigator = createBottomTabNavigator({
        About: {
            screen: AboutTab,
            navigationOptions: {
                headerTintColor: 'white',
                title: 'About',
                // headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
                // headerLeft: <Icon name="arrow-back" style={styles.headerIcon} onPress={() => this.props.navigation.navigate('Castles')} />,
                headerStyle: {
                    backgroundColor: colors.mainColor,
                },
                tabBarLabel: 'About',
                tabBarIcon: ({ tintColor }) => (
                    <Icon style={{fontSize: 22, color: tintColor}} name="location-city" />
                ),
            },

        },
        History: {
            screen: HistoryTab,
            navigationOptions: {
                headerTintColor: 'white',
                title: 'History222',
                // headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
                // headerLeft: <Icon name="arrow-back" style={styles.headerIcon} onPress={() => this.props.navigation.navigate('Castles')} />,
                headerStyle: {
                    backgroundColor: colors.mainColor,
                },
                tabBarLabel: 'History',
                tabBarIcon: ({ tintColor }) => (
                    <Icon style={{fontSize: 22, color: tintColor}} name="book" />
                ),
            },

        },
        Gallery: {
            screen: GalleryTab,
            navigationOptions: {
                headerTintColor: 'white',
                // headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
                // headerLeft: <Icon name="arrow-back" style={styles.headerIcon} onPress={() => this.props.navigation.navigate('Castles')} />,
                headerStyle: {
                    backgroundColor: colors.mainColor,
                },
                tabBarLabel: 'Gallery',
                tabBarIcon: ({ tintColor }) => (
                    <Icon style={{fontSize: 22, color: tintColor}} name="collections" />
                ),
            },

        },
        Location: {
            screen: LocationTab,
            navigationOptions: {
                headerTintColor: 'white',
                // headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
                // headerLeft: <Icon name="arrow-back" style={styles.headerIcon} onPress={() => this.props.navigation.navigate('Castles')} />,
                headerStyle: {
                    backgroundColor: colors.mainColor,
                },
                tabBarLabel: 'Location',
                tabBarIcon: ({ tintColor }) => (
                    <Icon style={{fontSize: 22, color: tintColor}} name="place" />
                ),
            },

        },
    },
    {
        tabBarOptions: {
            activeTintColor: 'white',
            labelStyle: {
                fontSize: 12,
            },
            style: {
                backgroundColor: colors.mainColor,
            },
        }
    });

export const Tabs = createAppContainer(TabsNavigator);