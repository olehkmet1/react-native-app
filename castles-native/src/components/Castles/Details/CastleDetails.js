import {Component} from "react";
import React from "react";
import { connect } from 'react-redux';

import {Image, View} from 'react-native';

import { Container, Header, Title, Left, Right, Button, Body, Content,Text, Card, CardItem} from "native-base";

import Icon from 'react-native-vector-icons/MaterialIcons';

// import TabNavigator from  '../../navigation/RootNavigator';
import {colors} from "../../../assets/variables";
import {styles} from "../../../assets/styles";
import {createAppContainer, createBottomTabNavigator} from "react-navigation";
import AboutTab from "./Tabs/AboutTab";
import HistoryTab from "./Tabs/HistoryTab";
import GalleryTab from "./Tabs/GalleryTab";
import LocationTab from "./Tabs/LocationTab";
import {Tabs} from '../../../navigation/Castles/TabsNavigator';




class CastleDetails extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTintColor: 'white',
        // headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        headerStyle: {
            backgroundColor: colors.mainColor,
        },
        headerTitle: <View style={{flexDirection: 'column', paddingLeft: 12}}>
            <Text style={styles.detailHeader}>History</Text>
            <Text style={styles.detailSubHeader}>Ukraine</Text>
        </View>
    });


    render() {
        return (
            <Tabs />
        );
    }
}

export default connect()(CastleDetails);