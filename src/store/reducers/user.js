import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../actions/actionTypes'

const initialState = {
    email: null,
    nome: null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case USER_LOGGED_IN:
            return {
                ...state,
                email: action.payload.email,
                o: action.payload.nome
            }
        case USER_LOGGED_OUT: 
            return {
                ...state,
                email: null,
                nome: null
            }
        default: 
            return state
    }
}

export default reducer