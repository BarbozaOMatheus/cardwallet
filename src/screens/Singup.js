import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import {connect} from 'react-redux'
import {addUser} from '../store/actions/AddUser' 

import TextInputMask from 'react-native-text-input-mask';

class Singup extends Component {

  state= {
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

  render() {
    return (
      <>
        <ScrollView style={styles.container}>
          <View style={{alignItems: 'center'}}>
            <View style={styles.cabecalho}>
              <Text style={styles.textoCabecalho}>CADASTRO</Text>
            </View>
          </View>
          <View style={styles.questions}>
            <View style={styles.boxQuestion}>
              <Text style={styles.txtQuestion}>QUAL O SEU NOME?</Text>
              <TextInput
                style={styles.input}
                placeholderTextColor="#fff"
                underlineColorAndroid="#fff"
                onChangeText={(text) => this.setState({nome: text})}
                value={this.state.nome}
              />
            </View>
            <View style={styles.boxQuestion}>
              <Text style={styles.txtQuestion}>QUAL O SEU TELEFONE?</Text>
              <TextInputMask
                style={styles.input}
                placeholderTextColor="#fff"
                underlineColorAndroid="#fff"
                keyboardType="numeric"
                mask={'[00] [00000]-[0000]'}
                onChangeText={(text) => this.setState({telefone: text})}
                value={this.state.telefone}
              />
            </View>
            <View style={styles.boxQuestion}>
              <Text style={styles.txtQuestion}>QUAL O SEU E-MAIL?</Text>
              <TextInput
                style={styles.input}
                placeholderTextColor="#fff"
                underlineColorAndroid="#fff"
                onChangeText={(text) => this.setState({email: text})}
                value={this.state.email}
              />
            </View>
            <View style={styles.boxQuestion}>
              <Text style={styles.txtQuestion}>QUAL O SEU CPF?</Text>
              <TextInputMask
                style={styles.input}
                placeholderTextColor="#fff"
                underlineColorAndroid="#fff"
                keyboardType="numeric"
                mask={'[000].[000].[000]-[00]'}
                onChangeText={(text) => this.setState({cpf: text})}
                value={this.state.cpf}
              />
            </View>
            <View style={styles.boxQuestion}>
              <Text style={styles.txtQuestion}>CRIE UMA SENHA DE ACESSO</Text>
              <TextInput
                style={styles.input}
                placeholderTextColor="#fff"
                underlineColorAndroid="#fff"
                onChangeText={(text) => this.setState({senha: text})}
                value={this.state.senha}
              />
            </View>
          </View>
          <View style={{alignItems: 'center', marginTop: 30}}>
            <View style={styles.btnCadastro}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('login')}>
                <Text style={styles.txtbtnCadastro}>CADASTRAR</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#282B33',
    flex: 1,
  },
  txtbtnCadastro: {
    color: '#fff',
  },
  questions: {
    paddingTop: 30,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  boxQuestion: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 43,
  },
  txtQuestion: {
    color: '#fff',
    fontSize: 20,
  },
  input: {
    width: 300,
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
  },
  cabecalho: {
    backgroundColor: '#50AFAA',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 43,
    width: 200,
    height: 48,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  textoCabecalho: {
    color: '#ffff',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  btnCadastro: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#50AFAA',
    borderRadius: 30,
    width: 150,
    height: 50,
  },
});

//export default Singup;

// const mapStateToProps = ({ user }) => {
//   return {
//     nome: user.nome,
//     telefone: user.telefone,
//     email: user.email,
//     cpf: user.cpf,
//     senha: user.senha
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddUser: user => dispatch(addUser(user))
//   }
// }

export default Singup;