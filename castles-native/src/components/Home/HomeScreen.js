import {Component} from "react";
import React from "react";
import { connect } from 'react-redux';
import * as authActions from '../../store/actions/auth'
import {logout} from '../../store/operations/auth'

import { Container, Header, Title, Left, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";

import Icon from 'react-native-vector-icons/MaterialIcons';

class HomeScreen extends Component {
    // static navigationOptions = ({ navigation }) => ({
    //     headerTintColor: 'white',
    //     title: 'Castles',
    //     // headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
    //     headerLeft: <Icon name="menu" style={{ paddingLeft: 10, fontSize: 22, color: 'white' }} onPress={() => navigation.toggleDrawer()} />,
    //     drawerLabel: 'Castles',
    //     headerStyle: {
    //         backgroundColor: 'purple',
    //     },
    //     drawerIcon: ({ tintColor }) => (
    //         <Icon style={{fontSize: 22}} name="security" />
    //     ),
    // });

    logout () {
        const { dispatch } = this.props;
        const { navigate } = this.props.navigation;

            logout()
            .then(res => {
                dispatch(authActions.logout())
                navigate('UnauthorizedApplication');
            });
    }

    render() {
        return (
            <Container>
                <Content padder>
                    <Card>
                        <CardItem>
                            <Body>
                            <Text>The winter is here!</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Button full rounded dark
                            style={{ marginTop: 10 }}
                            onPress={() => this.props.navigation.navigate("Castles")}>
                        <Text>For the Watch!</Text>
                        <Text></Text>
                    </Button>
                    <Button full rounded dark
                            style={{ marginTop: 10 }}
                            onPress={() => this.props.navigation.navigate("Profile")}>
                        <Text>Profile</Text>
                    </Button>
                    <Button full rounded primary
                            style={{ marginTop: 10 }}
                            onPress={() => this.props.navigation.navigate("Settings")}>
                        <Text>Settings</Text>
                    </Button>
                </Content>
            </Container>

        );
    }
}

export default connect()(HomeScreen);
