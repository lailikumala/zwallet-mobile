import Axios from 'axios'

// by id
const UserRequest = ()=> {
    return{
        type: 'USER_REQUEST'
    }
}

const UserSuccess = (data)=> {
    return{
        type: 'USER_SUCCESS',
        payload: data
    }
}
const UserError = (error)=> {
    return{
        type: 'USER_ERROR',
        payload: error
    }
}

export const GetUser = (fields) => {
    return (dispatch) =>{
        dispatch(UserRequest())
        return Axios({
            method: 'GET',
            url:    `https://db-zwallet.herokuapp.com/api/users/${fields.id}`,
            headers: {
                'auth-token': `${fields.token}`
            }
        }).then((res)=> {
            const data = res.data
            console.log(data, 'dat')
            
            dispatch(UserSuccess(data))
        }).catch((err)=> {
            const message = err.message
            dispatch(UserError(message))
        })
    }
}

// all users
const UserAllRequest = ()=> {
    return{
        type: 'USERALL_REQUEST'
    }
}

const UserAllSuccess = (data)=> {
    return{
        type: 'USERALL_SUCCESS',
        payload: data
    }
}
const UserAllError = (error)=> {
    return{
        type: 'USERALL_ERROR',
        payload: error
    }
}


export const GetAllUser = (fields) => {
    return (dispatch) =>{
        dispatch(UserAllRequest())
        return Axios({
            method: 'GET',
            url:    `https://db-zwallet.herokuapp.com/api/users`,
            headers: {
                'auth-token': `${fields.token}`
            }
        }).then((res)=> {
            const data = res.data
            console.log(data, 'dat')
            
            dispatch(UserAllSuccess(data))
        }).catch((err)=> {
            const message = err.message
            dispatch(UserAllError(message))
        })
    }
}

// search name
const SearchNameRequest = ()=> {
    return{
        type: 'SEARCHNAME_REQUEST'
    }
}

const SearchNameSuccess = (data)=> {
    return{
        type: 'SEARCHNAME_SUCCESS',
        payload: data
    }
}
const SearchNameError = (error)=> {
    return{
        type: 'SEARCHNAME_ERROR',
        payload: error
    }
}

export const SearchNameUser = (fields, query) => {
    return (dispatch) =>{
        dispatch(SearchNameRequest())
        return Axios({
            method: 'GET',
            url:    `https://db-zwallet.herokuapp.com/api/users/search_name?name=${query}&sortBy=name&sortType=ASC`,
            headers: {
                'auth-token': `${fields.token}`
            }
        }).then((res)=> {
            const data = res.data
            console.log(data, 'dat')
            
            dispatch(SearchNameSuccess(data))
        }).catch((err)=> {
            const message = err.message
            dispatch(SearchNameError(message))
        })
    }
}

//patch photo
const ChangePhotoRequest = ()=> {
    return{
        type: 'CHANGEPHOTO_REQUEST'
    }
}

const ChangePhotoSuccess = (data)=> {
    return{
        type: 'CHANGEPHOTO_SUCCESS',
        payload: data
    }
}
const ChangePhotoError = (error)=> {
    return{
        type: 'CHANGEPHOTO_ERROR',
        payload: error
    }
}

export const PatchPhoto = (fields) => {
    return (dispatch) =>{
        
        dispatch(ChangePhotoRequest())
        return Axios({
            method: 'PATCH',
            data: {
                photo: fields.photo
            },
            url:    `https://db-zwallet.herokuapp.com/api/change_phone/${fields.id}`,
            headers: {
                'auth-token': `${fields.token}`,
                'Content-Type': 'multipart/form-data',
                 Accept: 'application/json',
            }
        }).then((res)=> {
            const data = res.data
            console.log(data, 'dat')
            dispatch(ChangePhotoSuccess(data))
        }).catch((err)=> {
            const message = err.message
            dispatch(ChangePhotoError(message))
        })
    }
}

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
