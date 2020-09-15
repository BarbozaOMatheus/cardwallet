import { ADD_USER } from './actionTypes'

export const AddUser = user => {
    return {
        type: ADD_USER,
        payload: user
    }
}