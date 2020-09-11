import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

Icon.loadFont();
IconMaterial.loadFont();

export default ({navigation}) => {
  return (
    <>
      <View style={style.container}>
        <View style={{alignItems: 'center'}}>
          <View style={style.cabecalho}>
            <Text style={style.textoCabecalho}>FATURA</Text>
          </View>
        </View>
        <View style={style.faturas}>
          <View style={{alignItems: 'center'}}>
            <View style={style.txtFatura}>
              <Text style={style.textoCabecalho}>JAN</Text>
              <Text style={style.textoCabecalho}>R$ 0,00</Text>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={style.txtFatura}>
              <Text style={style.textoCabecalho}>JAN</Text>
              <Text style={style.textoCabecalho}>R$ 0,00</Text>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={style.txtFatura}>
              <Text style={style.textoCabecalho}>JAN</Text>
              <Text style={style.textoCabecalho}>R$ 0,00</Text>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={style.txtFatura}>
              <Text style={style.textoCabecalho}>JAN</Text>
              <Text style={style.textoCabecalho}>R$ 0,00</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: '#282B33',
            marginTop: 100,
          }}>
          <View style={style.btnCadastro}>
            <TouchableOpacity
              onPress={() => navigation.navigate('cadastroFatura')}>
              <Text style={style.txtbtnCadastro}>CADASTRAR FATURA</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={style.navegacao}>
        <TouchableOpacity onPress={() => navigation.navigate('dashboard')}>
          <Icon name="home" size={35} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('cartao')}>
          <Icon name="credit-card" size={35} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('fatura')}>
          <IconMaterial name="currency-eth" size={35} color="#fff" />
        </TouchableOpacity>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#282B33',
    flex: 1,
  },
  txtFatura: {
    flexDirection: 'row',
    backgroundColor: '#9A9393',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 43,
    width: 300,
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
  faturas: {
    paddingTop: 30,
    flexDirection: 'column',
  },
  navegacao: {
    backgroundColor: '#282B33',
    justifyContent: 'space-around',
    height: '7%',
    flexDirection: 'row',
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
  txtbtnCadastro: {
    color: '#fff',
  },
});
