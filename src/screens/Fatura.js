import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default () => {
  return (
    <View>
      <Text>Fatura</Text>
      <View style={style.containerStyle}>
        <Text>teste</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
});
