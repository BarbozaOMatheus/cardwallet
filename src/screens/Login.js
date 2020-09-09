import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';

export default function Login() {
  return (
    <View style={{flex: 1}}>
      <Image
        style={{flex: 1, width: null, height: null, resizeMode: 'cover'}}
        source={require('../images/fundo.jpg')}></Image>
      <View>
        <Text>teste</Text>
      </View>
    </View>
  );
}
