import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

Icon.loadFont();
IconMaterial.loadFont();

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import HomeScreen from './components/Dashboard';
import Cartao from './components/Cartao';
import Fatura from './components/Fatura';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#50AFAA"
        inactiveColor="#9A9393"
        barStyle={{backgroundColor: '#282B33'}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Cartao"
          component={Cartao}
          options={{
            tabBarLabel: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="credit-card" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Fatura"
          component={Fatura}
          options={{
            tabBarLabel: false,
            tabBarIcon: ({color, size}) => (
              <IconMaterial name="currency-eth" color={color} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
