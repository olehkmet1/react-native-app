import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginSuccess } from '../../store/actions/auth'
import { login } from '../../store/operations/auth'

import {
    Form,
    Item,
    Input,
    Label,
    Text,
    H1,
    View,
    Button
} from 'native-base';

import styles from './styles'

class LoginForm extends Component {

    constructor() {
        super();

        this.state = {
            errors: [],
            email: 'me@otakoyi.com',
            password: ''
        }
    }

    submitForm() {

        const { dispatch } = this.props;
        const { navigate } = this.props.navigation;


        this.validate();

        if(this.hasErrors()) return;

        login(this.state.email, this.state.password)
            .then(result => {

                if(! result.status ){

                    let errors = [];

                    errors.push(result.message)

                    return this.setState({ errors });
                }

                dispatch(loginSuccess())

                navigate('AuthorizedApplication');
        });
    }

    validate() {
        // simple validation rules
        const requiredValidator = value => !!value;
        const emailValidator = value => value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(value);

        let errors = [];

        if(!emailValidator(this.state.email)){
            errors.push({ field: 'email', error: 'Invalid email' });
        }

        if(!requiredValidator(this.state.password)){
            errors.push({ field: 'password', error: 'Invalid password' });
        }

        this.setState({ errors });
    }

    hasErrors()
    {
        return this.state.errors.length > 0;
    }

    hasError(name)
    {
        return this.state.errors.find(err => { return err.field === name })
    }

    getError(name)
    {
        return this.state.errors.find(err => { return err.field === name }).error;
    }

    render() {

        // const {loggedIn} = this.props;

        return (
            <Form style={{flex:1}}>
                <View style={{flex:1, alignContent: 'center', alignItems: 'center', padding: 30}}><H1>Sign In</H1></View>
                <Item fixedLabel  error={this.hasError('email') ? true : null}>
                    <Label>Username</Label>
                    <Input value={this.state.email} onChangeText={(value) => this.setState({email: value})}/>
                    {this.hasError('email') && <Text style={styles.error}>{this.getError('email')}</Text> }
                </Item>
                <Item fixedLabel last  error={this.hasError('password') ? true : null}>
                    <Label>Password</Label>
                    <Input value={this.state.password} onChangeText={(value) => this.setState({password: value})} />
                    {this.hasError('password') && <Text style={styles.error}>{this.getError('password')}</Text> }
                </Item>
                <View style={{padding: 30, alignItems: 'flex-end', flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <Button onPress={(e) => this.submitForm(e)} bordered primary><Text>Login</Text></Button>
                </View>
                {/*{loggedIn && <View style={{flex:1, alignContent: 'center', alignItems: 'center', padding: 30}}><H1>Logged In</H1></View>}*/}
            </Form>
        );
    }
}
//
// const mapStateToProps = (state) => {
//     return {
//         // loggedIn : state.auth.loggedIn
//     };
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         onLoginSuccess: () => dispatch(loginSuccess())
//     };
// };

export default connect()(LoginForm);
