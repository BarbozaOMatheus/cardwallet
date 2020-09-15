import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

Icon.loadFont();
IconMaterial.loadFont();

class Fatura extends Component{
  state = {
    faturas: [
      {
        id: '001',
        data: '12/08/2020',
        valor: 150,
        paga: true,
      },
      {
        id: '002',
        data: '12/09/2020',
        valor: 250,
        paga: true,
      },
      {
        id: '003',
        data: '12/10/2020',
        valor: 200,
        paga: true,
        cartao: '1111 1111 1111 1111'
      },
      {
        id: '004',
        data: '12/11/2020',
        valor: 350,
        paga: false,
      },
    ]
  }
  
  render(){
  return (
    <>
      <View style={style.container}>
        <View style={{alignItems: 'center'}}>
          <View style={style.cabecalho}>
            <Text style={style.textoCabecalho}>FATURA</Text>
          </View>
        </View>
        <FlatList
          data={this.state.faturas}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => 
            <View 
            style={style.list}
            key={item.id}>
              <Text style={style.txtDescFatura}>DATA: {item.data}</Text>
              <Text style={style.txtDescFatura}>VALOR: R$ {item.valor}</Text>
            </View>
          } />
        <View
          style={{
            alignItems: 'center',
            backgroundColor: '#282B33',
            marginBottom: 20
          }}>
          <View style={style.btnCadastro}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('cadastroFatura')}>
              <Text style={style.txtbtnCadastro}>CADASTRAR FATURA</Text>
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
  list: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 50,
  },
  txtDescFatura: {
    fontSize: 17,
    color: '#fff',
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

export default Fatura;