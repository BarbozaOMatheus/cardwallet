import React, {useEffect, Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  BackHandler,
  Alert,
} from 'react-native';

import {connect} from 'react-redux';
import { logout } from '../store/actions/user'

import Icon from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

Icon.loadFont();
IconMaterial.loadFont();

class Dashboard extends Component{
  logout = () => {
    this.props.onLogout()
    this.props.navigation.navigate('login')
  }
  
  render() {

    const nome = this.props.nome || 'Usuário'
  return (
    <>
      <View style={styles.root}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.nomeUsuario}>
            <Text style={styles.texto}>{nome}</Text>
          </View>
        </View>
        <View
          style={{marginTop: 30, alignItems: 'flex-start', paddingLeft: 25}}>
          <Text style={{fontSize: 15, color: '#fff'}}>FATURA ATUAL</Text>
        </View>
        <View
          style={{marginTop: 15, alignItems: 'flex-start', paddingLeft: 25}}>
          <Text style={{fontSize: 30, color: '#F103AE'}}>R$ 0,00</Text>
        </View>
        <View style={styles.despesas}>
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
        <View style={styles.despesas}>
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
        <View style={styles.despesas}>
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
        <View style={styles.despesas}>
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
      </View>
      <View style={styles.navegacao}>
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
};
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: '#282B33',
    flex: 1,
  },
  navegacao: {
    backgroundColor: '#282B33',
    justifyContent: 'space-around',
    height: '7%',
    flexDirection: 'row',
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

const mapStateToProps = ({user}) => {
  return {
    nome: user.nome  
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
//export default Dashboard;