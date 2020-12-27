import Axios from 'axios'
const GetHistoryRequest = ()=> {
    return{
        type: 'GETHISTORY_REQUEST'
    }
}

const GetHistorySuccess = (data)=> {
    return{
        type: 'GETHISTORY_SUCCESS',
        payload: data
    }
}
const GetHistoryError = (error)=> {
    return{
        type: 'GETHISTORY_ERROR',
        payload: error
    }
}




export const History = (fields) => {
    return (dispatch) =>{
        
        dispatch(GetHistoryRequest())
        return Axios({
            method: 'GET',
            url:    `https://db-zwallet.herokuapp.com/api/transfer/${fields.id}`,
            headers: {
                'auth-token': `${fields.token}`
            }
        }).then((res)=> {
            const data = res.data
            console.log(data, 'dat')
            
            dispatch(GetHistorySuccess(data))
        }).catch((err)=> {
            const message = err.message
            dispatch(GetHistoryError(message))
        })
    }
}



