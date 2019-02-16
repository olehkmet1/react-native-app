import {
    AUTH_SUCCESS,
    AUTH_LOGOUT
} from '../constants/auth';

export const loginSuccess = () => ({
    type: AUTH_SUCCESS
})

export const logout = () => ({
    type: AUTH_LOGOUT
})
