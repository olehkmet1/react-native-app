import {Component} from "react";
import React from "react";
import { connect } from 'react-redux';

import {  Image } from 'react-native';

import { Container, Header, Title, Left, Right, Button, Body, Content,Text, Card, CardItem} from "native-base";

import Icon from 'react-native-vector-icons/MaterialIcons';

class LocationTab extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTintColor: 'white',
        title: 'History33',
        // headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        headerLeft: <Icon name="arrow-back" style={{ paddingLeft: 10, fontSize: 22, color: 'white' }} onPress={() => navigation.goBack()} />,
        headerStyle: {
            backgroundColor: 'purple',
        },
    });


    render() {
        return (
            <Container>
                <Image source={{uri: 'https://castles.today/assets/uploads/content/1057/thumb/nesvizh-1.jpg'}} style={{height: 200, width: null}}/>
                <Content padder>

                    <Text style={{opacity: 0.6}}>Location is here!</Text>
                </Content>
            </Container>

        );
    }
}

export default connect()(LocationTab);