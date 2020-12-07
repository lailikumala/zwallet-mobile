import Axios from 'axios'
import { ToastAndroid } from 'react-native'
const ChangePhoneRequest = ()=> {
    return{
        type: 'CHANGEPHONE_REQUEST'
    }
}

const ChangePhoneSuccess = (data)=> {
    return{
        type: 'CHANGEPHONE_SUCCESS',
        payload: data
    }
}
const ChangePhoneError = (error)=> {
    return{
        type: 'CHANGEPHONE_ERROR',
        payload: error
    }
}

export const PatchPhone = (fields) => {
    return (dispatch) =>{
        
        dispatch(ChangePhoneRequest())
        return Axios({
            method: 'PATCH',
            data: {
                phone: fields.phone
            },
            url:    `https://db-zwallet.herokuapp.com/api/change_phone/${fields.id}`,
            headers: {
                'auth-token': `${fields.token}`
            }
        }).then((res)=> {
            const data = res.data
            console.log(data, 'dat')
            dispatch(ChangePhoneSuccess(data))
            ToastAndroid.show(
                `Update Successful`,
                ToastAndroid.SHORT,
            );
        }).catch((err)=> {
            const message = err.message
            dispatch(ChangePhoneError(message))
        })
    }
}

