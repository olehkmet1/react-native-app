import {Container} from "native-base";
import {Text, View} from "react-native";
import React from "react";
import {connect} from "react-redux";
import {Component} from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from "../../../assets/styles";
import {colors} from "../../../assets/variables";

class FiltersScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTintColor: 'white',
        headerTitle: <View style={{flexDirection: 'column', paddingLeft: 12}}>
            <Text style={styles.detailHeader}>Filter</Text>
        </View>,
        headerStyle: {
            backgroundColor: colors.mainColor,
        },
    });

    render() {
        return (
            <Container>
                <Container style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text>Sear22ch 2Screen</Text>
                </Container>
            </Container>
        );
    }
}

export default connect()(FiltersScreen);