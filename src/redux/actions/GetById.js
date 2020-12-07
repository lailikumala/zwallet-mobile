import Axios from 'axios'

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


export const UserById = (fields, id) => {
    return (dispatch) =>{
        
        dispatch(GetByIdRequest())
        return Axios({
            method: 'GET',
            url:    `https://db-zwallet.herokuapp.com/api/users/${id}`,
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

