import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default ({navigation}) => {
  const [nome, setNome] = React.useState('');

  return (
    <>
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.cabecalho}>
            <Text style={styles.textoCabecalho}>CADASTRO</Text>
          </View>
        </View>
        <View style={styles.questions}>
          <View style={styles.boxQuestion}>
            <TextInput
              style={styles.input}
              placeholder="Qual o seu nome?"
              onChangeText={(nome) => setNome(nome)}
              placeholderTextColor="#fff"
            />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#282B33',
    flex: 1,
  },
  questions: {
    paddingTop: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxQuestion: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtQuestion: {
    color: '#fff',
    fontSize: 20,
  },
  input: {
    backgroundColor: '#9A9393',
    borderRadius: 30,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
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
});
