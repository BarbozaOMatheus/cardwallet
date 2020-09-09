import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';

export default () => {
  return (
    <ScrollView style={style.root}>
      <View style={{alignItems: 'center'}}>
        <View style={style.nomeUsuario}>
          <Text style={style.texto}>MARIA JOSÉ</Text>
        </View>
      </View>
      <View style={{marginTop: 30, alignItems: 'flex-start', paddingLeft: 25}}>
        <Text style={{fontSize: 15, color: '#fff'}}>FATURA ATUAL</Text>
      </View>
      <View style={{marginTop: 15, alignItems: 'flex-start', paddingLeft: 25}}>
        <Text style={{fontSize: 30, color: '#F103AE'}}>R$ 0,00</Text>
      </View>
      <View style={style.despesas}>
        <View style={{flexDirection: 'column'}}>
          <View>
            <Text style={{fontSize: 17, color: '#fff'}}>DESCRIÇÃO</Text>
          </View>
          <View>
            <Text style={{fontSize: 15, color: '#9A9393'}}>CATEGORIA</Text>
          </View>
        </View>
        <View>
          <Text style={{fontSize: 25, color: '#9A9393'}}>R$ 0,00</Text>
        </View>
      </View>
      <View style={style.despesas}>
        <View style={{flexDirection: 'column'}}>
          <View>
            <Text style={{fontSize: 17, color: '#fff'}}>DESCRIÇÃO</Text>
          </View>
          <View>
            <Text style={{fontSize: 15, color: '#9A9393'}}>CATEGORIA</Text>
          </View>
        </View>
        <View>
          <Text style={{fontSize: 25, color: '#9A9393'}}>R$ 0,00</Text>
        </View>
      </View>
      <View style={style.despesas}>
        <View style={{flexDirection: 'column'}}>
          <View>
            <Text style={{fontSize: 17, color: '#fff'}}>DESCRIÇÃO</Text>
          </View>
          <View>
            <Text style={{fontSize: 15, color: '#9A9393'}}>CATEGORIA</Text>
          </View>
        </View>
        <View>
          <Text style={{fontSize: 25, color: '#9A9393'}}>R$ 0,00</Text>
        </View>
      </View>
      <View style={style.despesas}>
        <View style={{flexDirection: 'column'}}>
          <View>
            <Text style={{fontSize: 17, color: '#fff'}}>DESCRIÇÃO</Text>
          </View>
          <View>
            <Text style={{fontSize: 15, color: '#9A9393'}}>CATEGORIA</Text>
          </View>
        </View>
        <View>
          <Text style={{fontSize: 25, color: '#9A9393'}}>R$ 0,00</Text>
        </View>
      </View>
    </ScrollView>
  );
};
const style = StyleSheet.create({
  root: {
    backgroundColor: '#282B33',
    flex: 1,
  },
  despesas: {
    marginTop: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  nomeUsuario: {
    backgroundColor: '#50AFAA',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 43,
    width: 200,
    height: 48,
    borderRadius: 30,
    shadowOpacity: 30,
  },
  texto: {
    color: '#ffff',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
});
