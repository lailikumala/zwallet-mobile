import { combineReducers } from 'redux'
import Auth from './Auth'
import User from './User'
import GetById from './GetById'
import Topup from './Topup'
import ChangePin from './ChangePin'
import ChangePhone from './ChangePhone'
import ChangePhoto from './ChangePhoto'
import ResetPassword from './ResetPassword'

const reducers = combineReducers({
    Auth,
    User,
    GetById,
    Topup,
    ChangePin,
    ChangePhone,
    ChangePhoto,
    ResetPassword
})

export default reducers