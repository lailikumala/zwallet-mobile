import Axios from 'axios'
import { ToastAndroid } from 'react-native'
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

