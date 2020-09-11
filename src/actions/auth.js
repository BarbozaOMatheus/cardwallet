import {LOGIN} from './actionType.js';

import {Alert} from 'react-native';

export const login = (user) => {
  return (dispatch, getState) => {
    const {email, senha} = getState().authReducer;
    if (email == user.email && senha == user.senha) {
      dispatch(confirmLogin(true));
    } else {
      dispatch(confirmLogin(false));
      Alert.alert('Erro', 'E-mail ou senha incorretos', [
        {
          text: 'OK',
          onPress: () => null,
          style: 'cancel',
        },
      ]);
    }
  };
};

export const confirmLogin = (value) => {
  return {type: LOGIN, payload: value};
};
