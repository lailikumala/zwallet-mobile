import Axios from 'axios'

const TransferRequest = ()=> {
    return{
        type: 'TRANSFER_REQUEST'
    }
}

const TransferSuccess = (data)=> {
    return{
        type: 'TRANSFER_SUCCESS',
        payload: data
    }
}
const TransferError = (error)=> {
    return{
        type: 'TRANSFER_ERROR',
        payload: error
    }
}


export const DataTansfer = (fields) => {
    return (dispatch) =>{
        dispatch(TransferRequest())
        return Axios({
            method: 'GET',
            url: `/users/search?name=${fields.name}&sortBy=name&sortType=ASC`,
            headers: {
                'auth-token': `${fields.token}`
            }
        }).then((res)=> {
            const data = res.data
            console.log(data, 'dat')
            dispatch(TransferSuccess(data))
        }).catch((err)=> {
            const message = err.message
            dispatch(TransferError(message))
        })
    }
}


const GetByIdRequest = ()=> {
    return{
        type: 'GETBYID_REQUEST'
    }
}

const GetByIdSuccess = (data)=> {
    return{
        type: 'GETBYID_SUCCESS',
        payload: data
    }
}
const GetByIdError = (error)=> {
    return{
        type: 'GETBYID_ERROR',
        payload: error
    }
}




export const UserById = (fields) => {
    return (dispatch) =>{
        
        dispatch(GetByIdRequest())
        return Axios({
            method: 'GET',
            url:    `https://db-zwallet.herokuapp.com/api/users/${fields.id}`,
            headers: {
                'auth-token': `${fields.token}`
            }
        }).then((res)=> {
            const data = res.data
            console.log(data, 'dat')
            
            dispatch(GetByIdSuccess(data))
        }).catch((err)=> {
            const message = err.message
            dispatch(GetByIdError(message))
        })
    }
}


const PostTransferRequest = ()=> {
    return{
        type: 'POSTTRANSFER_REQUEST'
    }
}

const PostTransferSuccess = (data)=> {
    return{
        type: 'POSTTRANSFER_SUCCESS',
        payload: data
    }
}
const PostTransferError = (error)=> {
    return{
        type: 'POSTTRANSFER_ERROR',
        payload: error
    }
}



export const Transfer = (fields) => {
    return (dispatch) =>{
        
        dispatch(PostTransferRequest())
        return Axios({
            method: 'POST',
            data: {
                id_sender: fields.id_sender,
                id_reciever: fields.id_reciever,
                reciever: fields.reciever,
                amount: fields.amount,
                notes: fields.notes
            },
            url:    `https://db-zwallet.herokuapp.com/api/transfer`,
            headers: {
                'auth-token': `${fields.token}`
            }
        }).then((res)=> {
            const data = res.data
            console.log(data, 'dat')
            dispatch(PostTransferSuccess(data))
        }).catch((err)=> {
            const message = err.message
            dispatch(PostTransferError(message))
        })
    }
}


