import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

Icon.loadFont();
IconMaterial.loadFont();

class Cartao extends Component {
  render(){
  return (
    <>
      <View style={style.container}>
        <View style={{alignItems: 'center'}}>
          <View style={style.cabecalho}>
            <Text style={style.textoCabecalho}>CARTÃO</Text>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <ImageBackground
            source={require('../images/card-front.png')}
            style={{
              width: 300,
              height: 200,
              marginTop: 50,
            }}>
            <Text style={style.numCard}>0000 0000 0000 0000</Text>
          </ImageBackground>
        </View>
        <View style={style.info}>
          <Text style={{fontSize: 15, color: '#fff'}}>NOME DO TITULAR</Text>
          <Text style={{fontSize: 20, color: '#F103AE', paddingTop: 10}}>
            MARIA JOSÉ
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={style.lineStyle}></View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={style.info}>
            <Text style={{fontSize: 15, color: '#fff'}}>
              DATA DE{'\n'}VENCIMENTO
            </Text>
            <Text style={{fontSize: 20, color: '#F103AE', paddingTop: 10}}>
              12/27
            </Text>
          </View>
          <View
            style={{
              alignItems: 'flex-start',
              paddingLeft: 100,
              paddingTop: 20,
            }}>
            <Text style={{fontSize: 15, color: '#fff'}}>
              CÓD. DE{'\n'}SEGURANÇA
            </Text>
            <Text style={{fontSize: 20, color: '#F103AE', paddingTop: 10}}>
              12/27
            </Text>
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
              onPress={() => navigation.navigate('cadastroCard')}>
              <Text style={style.txtbtnCadastro}>EDITAR CARTÃO</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={style.navegacao}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('dashboard')}>
          <Icon name="home" size={35} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('cartao')}>
          <Icon name="credit-card" size={35} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('fatura')}>
          <IconMaterial name="currency-eth" size={35} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('profile')}>
          <Icon name="id-badge" size={35} color="#fff" />
        </TouchableOpacity>
      </View>
    </>
  );
  }
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#282B33',
    flex: 1,
  },
  numCard: {
    color: '#fff',
    fontSize: 20,
    marginTop: 70,
    marginLeft: 10,
  },
  info: {
    alignItems: 'flex-start',
    paddingLeft: 55,
    paddingTop: 20,
  },
  navegacao: {
    backgroundColor: '#282B33',
    justifyContent: 'space-around',
    height: '7%',
    flexDirection: 'row',
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: '#fff',
    margin: 10,
    width: 300,
    alignItems: 'center',
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

export default Cartao;