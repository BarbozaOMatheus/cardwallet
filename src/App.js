import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

/* import Icon from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

Icon.loadFont();
IconMaterial.loadFont();
 */
import Dashboard from './screens/Dashboard';
import Cartao from './screens/Cartao';
import Fatura from './screens/Fatura';
import Login from './screens/Login';
import Singup from './screens/Singup';

import {Provider, connect} from 'react-redux';
import store from './config/store';

const Stack = createStackNavigator();

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="cartao"
          component={Cartao}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="fatura"
          component={Fatura}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="singup"
          component={Singup}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
