import {Container} from "native-base";
import {Text, View} from "react-native";
import React from "react";
import {connect} from "react-redux";
import {Component} from "react";
import Icon from "../Castles/CastlesMain";
import {styles} from "../../assets/styles";
import {colors} from "../../assets/variables";

class SettingsScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTintColor: 'white',
        // title: "hello castle",
        // headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        headerLeft: <Icon name="arrow-back" style={{ paddingLeft: 10, fontSize: 22, color: 'white' }} onPress={() => navigation.goBack()} />,
        headerStyle: {
            backgroundColor: colors.mainColor,
        },
        headerTitle: <View style={{flexDirection: 'column', paddingLeft: 12}}><Text style={styles.detailHeader}>Filters</Text></View>
    });

    render() {
        return (
            <Container>
                <Container style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text>Settings Screen</Text>
                </Container>
            </Container>
        );
    }
}

export default connect()(SettingsScreen);