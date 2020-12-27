import { combineReducers } from 'redux'
import Auth from './Auth'
import User from './User'
import GetById from './GetById'
import Topup from './Topup'
import Transfer from './Transfer'
import ChangePin from './ChangePin'
import ChangePhone from './ChangePhone'
import ChangePhoto from './ChangePhoto'
import ResetPassword from './ResetPassword'
import History from './History'

const reducers = combineReducers({
    Auth,
    User,
    GetById,
    Topup,
    Transfer,
    ChangePin,
    ChangePhone,
    ChangePhoto,
    ResetPassword,
    History
})

export default reducers