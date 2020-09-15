import React, {useState, Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ImageBackground,
  StyleSheet,
} from 'react-native';

import {connect} from 'react-redux';
import { login } from '../store/actions/user'
//import {login} from '../actions/auth.js';
import Icon from 'react-native-vector-icons/FontAwesome';

class Login extends Component {
  state = {
    name: '',
    email: '',
    senha: '',
  };

  login = () => {
    this.props.onLogin({...this.state})
    this.props.navigation.navigate('dashboard')
  };
  render() {
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
              onChangeText={(text) => this.setState({email: text})}
              value={this.state.email}
            />
          </View>
          <View style={styles.boxEmail}>
            <Icon name="lock" size={35} color="#fff" />
            <TextInput
              style={styles.txtLogin}
              placeholder="Senha"
              placeholderTextColor="#fff"
              secureTextEntry={true}
              onChangeText={(text) => this.setState({senha: text})}
              value={this.state.senha}
            />
          </View>
          <View style={styles.btnLogin}>
            <TouchableOpacity onPress={() => this.login()}>
              <Text style={styles.txtbtnLogin}>ENTRAR</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('singup')}>
            <Text style={styles.txtCadastro}>CADASTRAR-SE</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

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

const mapDispatchToProps = dispatch => {
  return {
    onLogin: user => dispatch(login(user))
  }
}

export default connect(null, mapDispatchToProps)(Login)
