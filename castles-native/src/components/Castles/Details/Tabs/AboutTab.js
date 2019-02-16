import {Component} from "react";
import React from "react";
import { connect } from 'react-redux';

import {  Image } from 'react-native';

import { Container, Header, Title, Left, Right, Button, Body, Content,Text, Card, CardItem} from "native-base";

import Icon from 'react-native-vector-icons/MaterialIcons';

class AboutTab extends Component {



    render() {
        return (
            <Container>
                <Image source={{uri: 'https://castles.today/assets/uploads/content/290/thumb/orava-2.jpg'}} style={{height: 200, width: null}}/>
                <Content padder>
                    <Text style={{opacity: 0.6}}>About is here!</Text>
                </Content>
            </Container>

        );
    }
}

export default connect()(AboutTab);