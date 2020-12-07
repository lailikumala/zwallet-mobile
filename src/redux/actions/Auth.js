import Axios from 'axios'
import { ToastAndroid } from 'react-native'
const AuthLoginRequest = ()=> {
    return{
        type: 'LOGIN_REQUEST'
    }
}

const AuthLoginSuccess = (data)=> {
    return{
        type: 'LOGIN_SUCCESS',
        payload: data
    }
}
const AuthLoginError = (error)=> {
    return{
        type: 'LOGIN_ERROR',
        payload: error
    }
}

const AuthRegisterRequest = ()=> {
    return{
        type: 'REGISTER_REQUEST'
    }
}

const AuthRegisterSuccess = (data)=> {
    return{
        type: 'REGISTER_SUCCESS',
        payload: data
    }
}
const AuthRegisterError = (error)=> {
    return{
        type: 'REGISTER_ERROR',
        payload: error
    }
}


export const AuthLogin = (fields) => {
    return (dispatch) =>{
        dispatch(AuthLoginRequest())
        return Axios({
            method: 'POST',
            data: fields,
            url: 'https://db-zwallet.herokuapp.com/api/auth/login'
        }).then((res)=> {
            const data = res.data
            console.log(data, 'dataas')
            ToastAndroid.show('Login Successful', ToastAndroid.SHORT);
            dispatch(AuthLoginSuccess(data))
        }).catch((err)=> {
            const message = err.message
            dispatch(AuthLoginError(message))
            
        })
    }
}

export const AuthRegister = (fields) => {
    return (dispatch) =>{
        dispatch(AuthRegisterRequest())
        return Axios({
            method: 'POST',
            data: fields,
            url: 'https://db-zwallet.herokuapp.com/api/auth/signup'
        }).then((res)=> {
            const data = res.data
            console.log(data, 'dataas')
            ToastAndroid.show(
                `Register Successfully`,
                ToastAndroid.SHORT,
            );
            dispatch(AuthRegisterSuccess(data))
            dispatch(AuthLogout())
        }).catch((err)=> {
            const message = err.message
            dispatch(AuthRegisterError(message))
            dispatch(AuthLogout())
        })
    }
}

export const AuthLogout = ()=> {
    return{
        type: 'LOGOUT',
    }
}


