import React from "react";
import { AppRegistry, Image, ImageBackground, StatusBar } from "react-native";
import {Container, Content, Text, List, ListItem, Left, Button, Icon, Body, Title, Right, Header} from "native-base";
const routes = ["Home", "Profile", "Settings", "Details"];
export default class NavBar extends React.Component {
    render() {
        return (
            <Header>
                <Left>
                    <Button
                        transparent
                        onPress={() => this.props.toggle.toggleDrawer()}>
                        <Icon name="menu" />
                    </Button>
                </Left>
                <Body>
                <Title>{this.props.title}</Title>
                </Body>
                <Right />
            </Header>
        );
    }
}