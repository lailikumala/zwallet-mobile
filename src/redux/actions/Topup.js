import Axios from 'axios'


const TopupRequest = ()=> {
    return{
        type: 'TOPUP_REQUEST'
    }
}

const TopupSuccess = (data)=> {
    return{
        type: 'TOPUP_SUCCESS',
        payload: data
    }
}
const TopupError = (error)=> {
    return{
        type: 'TOPUP_ERROR',
        payload: error
    }
}

export const GetTopup = (fields) => {
    return (dispatch) =>{
        dispatch(TopupRequest())
        return Axios({
            method: 'GET',
            url:    `https://db-zwallet.herokuapp.com/api/topup`,
            headers: {
                'auth-token': `${fields.token}`
            }
        }).then((res)=> {
            const data = res.data
            console.log(data, 'dat')
            
            dispatch(TopupSuccess(data))
        }).catch((err)=> {
            const message = err.message
            dispatch(TopupError(message))
        })
    }
}

