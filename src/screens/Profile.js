import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

import {connect} from 'react-redux';

Icon.loadFont();
IconMaterial.loadFont();

class Profile extends Component{
  render(){
    const nome = this.props.nome || 'Usuário'
  return (
    <>
      <View style={style.container}>
        <View style={{alignItems: 'center'}}>
          <View style={style.cabecalho}>
            <Text style={style.textoCabecalho}>{nome}</Text>
          </View>
          <View style={style.cabecalho}>
            <Text style={style.textoCabecalho}>{this.props.email}</Text>
          </View>
        <View style={style.btnCadastro}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('login')}>
              <Text style={style.txtbtnCadastro}>SAIR</Text>
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
    justifyContent: 'center'
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
    marginTop: 50,
    width: 150,
    height: 50,
  },
  txtbtnCadastro: {
    color: '#fff',
  },
});

const mapStateToProps = ({user}) => {
    return {
      nome: user.nome,
      email: user.email
    };
  };

export default connect(mapStateToProps)(Profile);
