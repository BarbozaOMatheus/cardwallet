import {LOGIN} from '../actions/actionType.js';

const initialState = {
  email: 'teste@teste',
  senha: '1234',
  userLogged: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {...state, userLogged: action.payload};
  }

  return state;
};
