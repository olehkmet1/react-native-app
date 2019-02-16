
const token = '234yn9f-2ui34-98u5f94t5n0234m';
const _username = 'me@otakoyi.com', _password = '123';

export const login = (username, password) => {

    if(_username !== username) {
        return { status : false, message : {field: 'email', error: 'Invalid email'} };
    }

    if (_password !== password){
        return { status : false, message: {field: 'password', error: 'Invalid password'} }
    }

    return {
        status : true,
        token : token
    }

}

export const logout = () => {
    // some staff ...
    return true;
}
