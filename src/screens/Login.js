import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ImageBackground,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({navigation}) => {
  const [email, setEmail] = useState(true);
  const [password, setPassword] = useState(true);

  return (
    <ImageBackground
      source={require('../images/fundo.jpg')}
      style={styles.imageBackground}>
      <View style={styles.login}>
        <View style={styles.boxEmail}>
          <Icon name="at" size={35} color="#fff" />
          <TextInput
            style={styles.txtLogin}
            placeholder="E-mail"
            placeholderTextColor="#fff"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.boxEmail}>
          <Icon name="lock" size={35} color="#fff" />
          <TextInput
            style={styles.txtLogin}
            placeholder="Senha"
            placeholderTextColor="#fff"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.btnLogin}>
          <TouchableOpacity onPress={() => navigation.navigate('dashboard')}>
            <Text style={styles.txtbtnLogin}>ENTRAR</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('singup')}>
          <Text style={styles.txtCadastro}>CADASTRAR-SE</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxEmail: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginTop: 43,
  },
  btnLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#50AFAA',
    borderRadius: 30,
    width: 82,
    height: 37,
  },
  txtbtnLogin: {
    color: '#fff',
  },
  txtLogin: {
    color: '#fff',
    borderColor: '#fff',
    backgroundColor: '#9A9393',
    borderRadius: 30,
    width: 270,
    height: 63,
    marginLeft: 10,
  },
  txtCadastro: {
    color: '#9A9393',
  },
  login: {
    backgroundColor: '#282B33',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 20,
    width: 331,
    height: 264,
  },
});

export default Login;
