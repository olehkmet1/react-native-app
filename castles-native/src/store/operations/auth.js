import {AsyncStorage} from "react-native";
import * as authService from '../../services/auth'

const setToken = async (token) => {
    try {
        // console.warn('Set token:' + token);
        return await AsyncStorage.setItem('api_token', token);
    } catch (error) {
        console.log(error.message);
    }
};

export const getToken = async () => {

    try {
        return await AsyncStorage.getItem('api_token');
    } catch (error) {
        alert('Get token error' + error.message);
        console.log(error.message);

        return null;
    }
}

const deleteToken = async () => {
    try {
        await AsyncStorage.removeItem('api_token');
    } catch (error) {
        console.log(error.message);
    }
};

export const login = async (username, password) => {

    let result = authService.login(username, password);

    if( result.status ){
        await setToken(result.token);
    }

    return result;
}

export const logout = async () => {
    // some request to api ...
    deleteToken();
}
