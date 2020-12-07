import Axios from 'axios'
import { ToastAndroid } from 'react-native'
const ChangePinRequest = ()=> {
    return{
        type: 'CHANGEPIN_REQUEST'
    }
}

const ChangePinSuccess = (data)=> {
    return{
        type: 'CHANGEPIN_SUCCESS',
        payload: data
    }
}
const ChangePinError = (error)=> {
    return{
        type: 'CHANGEPIN_ERROR',
        payload: error
    }
}

export const PatchPin = (fields) => {
    return (dispatch) =>{
        
        dispatch(ChangePinRequest())
        return Axios({
            method: 'PATCH',
            data: {
                pin: fields.pin
            },
            url:    `https://db-zwallet.herokuapp.com/api/change_pin/${fields.id}`,
            headers: {
                'auth-token': `${fields.token}`
            }
        }).then((res)=> {
            const data = res.data
            console.log(data, 'dat')
            dispatch(ChangePinSuccess(data))
            ToastAndroid.show(
                `Update Successful`,
                ToastAndroid.SHORT,
            );
        }).catch((err)=> {
            const message = err.message
            dispatch(ChangePinError(message))
        })
    }
}

