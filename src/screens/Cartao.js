import React from 'react';
import {Text, View, StyleSheet, ImageBackground, Button} from 'react-native';

export default (props) => {
  return (
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
          }}></ImageBackground>
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
          style={{alignItems: 'flex-start', paddingLeft: 100, paddingTop: 20}}>
          <Text style={{fontSize: 15, color: '#fff'}}>
            CÓD. DE{'\n'}SEGURANÇA
          </Text>
          <Text style={{fontSize: 20, color: '#F103AE', paddingTop: 10}}>
            12/27
          </Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#282B33',
    flex: 1,
  },
  info: {
    alignItems: 'flex-start',
    paddingLeft: 55,
    paddingTop: 20,
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
});
