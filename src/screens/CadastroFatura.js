import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import TextInputMask from 'react-native-text-input-mask';

export default ({navigation}) => {
  const [nome, setNome] = React.useState('');

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.cabecalho}>
            <Text style={styles.textoCabecalho}>CADASTRO DE FATURA</Text>
          </View>
        </View>
        <View style={styles.questions}>
          <View style={styles.boxQuestion}>
            <Text style={styles.txtQuestion}>NÚMERO DO CARTÃO</Text>
            <TextInputMask
              style={styles.input}
              onChangeText={(nome) => setNome(nome)}
              placeholderTextColor="#fff"
              underlineColorAndroid="#fff"
              keyboardType="numeric"
              mask={'[0000] [0000] [0000] [0000]'}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={styles.boxQuestionBaixo}>
              <Text style={styles.txtQuestion}>DATA</Text>
              <TextInputMask
                style={styles.inputBaixo}
                onChangeText={(nome) => setNome(nome)}
                placeholderTextColor="#fff"
                underlineColorAndroid="#fff"
                keyboardType="numeric"
                mask={'[00]/[00]'}
              />
            </View>
            <View style={styles.boxQuestionBaixo}>
              <Text style={styles.txtQuestion}>VALOR</Text>
              <TextInputMask
                style={styles.inputBaixo}
                onChangeText={(nome) => setNome(nome)}
                placeholderTextColor="#fff"
                underlineColorAndroid="#fff"
                keyboardType="numeric"
                mask={'R$ [0000] '}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            marginTop: 200,
          }}>
          <View style={styles.btnCadastro}>
            <TouchableOpacity onPress={() => navigation.navigate('fatura')}>
              <Text style={styles.txtbtnCadastro}>CADASTRAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
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
