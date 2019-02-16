import {Container, Input, Header, Left, Button, Body, Right} from "native-base";
import {Text, View } from "react-native";
import React from "react";
import {connect} from "react-redux";
import {Component} from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from "../../../assets/styles";
import {colors} from "../../../assets/variables";


class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchName:''
        };
    }



    static navigationOptions = ({ navigation }) => {
        return {
            header: null,
    }};

    render() {
        return (
            <Container>
                    <Header style={{ backgroundColor: colors.mainColor }}>
                        <Left style={{flex: 0}}>
                            <Icon name='arrow-back' style={styles.headerIcon}
                                  onPress={() => this.props.navigation.goBack()}/>
                        </Left>
                        <Body style={{flex: 1, paddingLeft:12}}>
                        <Input placeholderTextColor={colors.white}
                               style={{color: colors.white, opacity:0.7}}
                               placeholder="Search"
                               value={this.state.searchName}
                               onChangeText = { (value) => {this.setState({searchName: value})}}
                        />
                        </Body>
                        <Right style={{flex: 0, paddingRight:10}}>
                            <Icon name='clear' style={styles.headerIcon}
                                  onPress={() => {this.setState({searchName: ''})}}/>
                        </Right>
                    </Header>
                <Container style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text>{this.state.searchName} Search 2Screen</Text>
                </Container>
            </Container>
        );
    }
}

export default connect()(SearchScreen);