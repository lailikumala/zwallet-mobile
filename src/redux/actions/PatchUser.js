import Axios from 'axios'
import { ToastAndroid } from 'react-native'
const PatchUserRequest = ()=> {
    return{
        type: 'PATCHUSER_REQUEST'
    }
}

const PatchUserSuccess = (data)=> {
    return{
        type: 'PATCHUSER_SUCCESS',
        payload: data
    }
}
const PatchUserError = (error)=> {
    return{
        type: 'PATCHUSER_ERROR',
        payload: error
    }
}


export const PatchProfile = (fields) => {
    return (dispatch) =>{
        
        dispatch(PatchUserRequest())
        return Axios({
            method: 'PATCH',
            data: {
                password: fields.password,
                pin: fields.pin
            },
            url:    `https://db-zwallet.herokuapp.com/api/users/${fields.id}`,
            headers: {
                'auth-token': `${fields.token}`
            }
        }).then((res)=> {
            const data = res.data
            console.log(data, 'dat')
            dispatch(PatchUserSuccess(data))
            ToastAndroid.show(
                `Update Successful`,
                ToastAndroid.SHORT,
            );
        }).catch((err)=> {
            const message = err.message
            dispatch(PatchUserError(message))
            ToastAndroid.show(
                `Update Failed`,
                ToastAndroid.SHORT,
            );
        })
    }
}

//reset password
const ResetPasswordRequest = ()=> {
    return{
        type: 'RESETPASSWORD_REQUEST'
    }
}

const ResetPasswordSuccess = (data)=> {
    return{
        type: 'RESETPASSWORD_SUCCESS',
        payload: data
    }
}
const ResetPasswordError = (error)=> {
    return{
        type: 'RESETPASSWORD_ERROR',
        payload: error
    }
}


export const ResetPass = (fields) => {
    return (dispatch) =>{
        
        dispatch(ResetPasswordRequest())
        return Axios({
            method: 'PATCH',
            data: {
                email: fields.email,
                password: fields.password,
            },
            url:    `https://db-zwallet.herokuapp.com/api/auth/reset_password`,
            headers: {
                'auth-token': `${fields.token}`
            }
        }).then((res)=> {
            const data = res.data
            console.log(data, 'dat')
            dispatch(ResetPasswordSuccess(data))
            ToastAndroid.show(
                `Update Successful`,
                ToastAndroid.SHORT,
            );
        }).catch((err)=> {
            const message = err.message
            dispatch(ResetPasswordError(message))
            ToastAndroid.show(
                `Update Failed`,
                ToastAndroid.SHORT,
            );
        })
    }
}

