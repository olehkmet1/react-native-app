import React, {Component} from 'react';
import { Text, View, Button} from 'react-native';
import {Container} from "native-base";

export class ProfileScreen extends Component {
    render() {
        return (
            <Container>
                <Container style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text>Profile Screen</Text>
                    <Button
                        title="Go home"
                        onPress={() => this.props.navigation.navigate('Home')}
                    />
                </Container>
            </Container>
        );
    }
}

// export class SettingsScreen extends Component {
//     render() {
//         return (
//             <Container>
//                 <Container style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//                     <Text>Settings Screen</Text>
//                 </Container>
//             </Container>
//         );
//     }
// }

export class ForgotPasswordScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Forgot password Screen</Text>
            </View>
        );
    }
}
