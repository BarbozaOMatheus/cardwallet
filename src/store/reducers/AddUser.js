import { ADD_USER } from '../actions/actionTypes'

const initialState = {
    user: [
        {
            id: '001',
            nome: 'usuário',
            telefone: '1234',
            email: 'teste@teste',
            cpf: '12345678',
            senha: '1231231',
        },
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_USER:
            return {
                ...state,
                user: state.user.concat({
                    ...action.payload
                })
            }
        default: 
            return state
    }
}

export default reducer