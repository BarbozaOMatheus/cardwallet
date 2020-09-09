import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Button,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

const Login = ({navigation}) => {
  return (
    <KeyboardAvoidingView style={{backgroundColor: '#eee'}}>
      <View>
        <Text>CARD WALLET</Text>
      </View>

      <View>
        <TextInput placeholder="E-mail" />
        <TextInput placeholder="Senha" secureTextEntry={true} />
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Text>Entrardassssssssasdasdasda</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
