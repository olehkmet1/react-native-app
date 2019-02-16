import React from "react";
import { AppRegistry, Image, ImageBackground, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem, Separator } from "native-base";
import * as Progress from 'react-native-progress';

export default class PageLoader extends React.Component {
    render() {
        return (
            <Container style={{alignItems: 'center',
                justifyContent:'center',
                flex: 1}}>
                <Progress.Bar progress={0.3} width={200} />
            </Container>
        );
    }
}