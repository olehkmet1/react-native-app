import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as auth from './store/operations/auth'

import HomeScreen from './components/Home/HomeScreen.js'

class App extends Component {

    constructor(props)
    {
        super(props);

        auth.getToken().then(token => {

            if(token) {
                return this.props.navigation.navigate('AuthorizedApplication');
            }

            this.props.navigation.navigate('UnauthorizedApplication');
        })
    }

    render() {
        return null;
    }
}


export default connect()(App);
