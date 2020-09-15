import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import TextInputMask from 'react-native-text-input-mask';

class CadastroCard extends Component{
  
  state={
    numCard: '',
    nomeCard: '',
    data: '',
    cod: ''
  }

  render() {
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.cabecalho}>
            <Text style={styles.textoCabecalho}>CADASTRO DE CARTÃO</Text>
          </View>
        </View>
        <View style={styles.questions}>
          <View style={styles.boxQuestion}>
            <Text style={styles.txtQuestion}>NÚMERO DO CARTÃO</Text>
            <TextInputMask
              style={styles.input}
              onChangeText={(text) => this.setState({numCard: text})}
              value={this.state.numCard}
              placeholderTextColor="#fff"
              underlineColorAndroid="#fff"
              keyboardType="numeric"
              mask={'[0000] [0000] [0000] [0000]'}
            />
          </View>
          <View style={styles.boxQuestion}>
            <Text style={styles.txtQuestion}>NOME NO CARTÃO</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => this.setState({nomeCard: text})}
              value={this.state.nomeCard}
              placeholderTextColor="#fff"
              underlineColorAndroid="#fff"
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={styles.boxQuestionBaixo}>
              <Text style={styles.txtQuestion}>DATA DE{'\n'}VENCIMENTO</Text>
              <TextInputMask
                style={styles.inputBaixo}
                onChangeText={(text) => this.setState({data: text})}
                value={this.state.data}
                placeholderTextColor="#fff"
                underlineColorAndroid="#fff"
                keyboardType="numeric"
                mask={'[00]/[00]'}
              />
            </View>
            <View style={styles.boxQuestionBaixo}>
              <Text style={styles.txtQuestion}>CÓD. DE{'\n'}SEGURANÇA</Text>
              <TextInputMask
                style={styles.inputBaixo}
                onChangeText={(text) => this.setState({cod: text})}
                value={this.state.cod}
                placeholderTextColor="#fff"
                underlineColorAndroid="#fff"
                keyboardType="numeric"
                mask={' [000] '}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            marginTop: 100,
          }}>
          <View style={styles.btnCadastro}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('cartao')}>
              <Text style={styles.txtbtnCadastro}>CADASTRAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#282B33',
    flex: 1,
  },
  txtbtnCadastro: {
    color: '#fff',
  },
  questions: {
    paddingTop: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  boxQuestion: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  boxQuestionBaixo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    paddingHorizontal: 40,
  },
  txtQuestion: {
    color: '#fff',
    fontSize: 20,
  },
  input: {
    width: 330,
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
  },
  inputBaixo: {
    width: 120,
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
  },
  cabecalho: {
    backgroundColor: '#50AFAA',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 43,
    width: 250,
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

export default CadastroCard;