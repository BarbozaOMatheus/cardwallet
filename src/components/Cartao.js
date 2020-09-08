import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

export default () => {
  return (
    <View>
      <Text>Cartão</Text>
      <Icon name="home" color="#A00" size={20} />
    </View>
  );
};
