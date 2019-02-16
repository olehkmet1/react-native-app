import {AUTH_SUCCESS, AUTH_LOGOUT} from '../constants/auth';

const initialState = {
    loggedIn: true,
    user    : {}
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                loggedIn: true
            }
        case AUTH_LOGOUT:
            return initialState;
        default:
            return state
    }
}

export default auth
