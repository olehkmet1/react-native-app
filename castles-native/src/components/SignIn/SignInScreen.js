import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';

import Logo from '../common/Logo'

import LoginForm from '../Login/LoginForm'

export default class SignInScreen extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Grid>
                        <Row  style={{ backgroundColor: '#635DB7', height: 200, flex:1, alignItems: 'center' , justifyContent: 'center'}}>
                            <Logo />
                        </Row>
                        <Row style={{flex:1, alignItems: 'center' , justifyContent: 'center'}}>
                            <LoginForm navigation = {this.props.navigation}  />
                        </Row>
                    </Grid>
                </Content>
            </Container>
        );
    }
}
