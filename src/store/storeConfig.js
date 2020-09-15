import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/user'
import addUserReducer from './reducers/AddUser'

const reducers = combineReducers({
    user: userReducer,
    addUser: addUserReducer
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig;