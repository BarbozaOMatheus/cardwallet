import React, {useEffect, Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {connect} from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

Icon.loadFont();
IconMaterial.loadFont();

class Dashboard extends Component{
  state = {
    faturaAtual: 250,
    faturas: [
      {
        id: '001',
        data: '12/08/2020',
        valor: 150,
        paga: true,
        cartao: '1111 1111 1111 1111'
      },
      {
        id: '002',
        data: '12/09/2020',
        valor: 250,
        paga: true,
        cartao: '222 222 222 2222'
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
        cartao: '1111 1111 1111 1111'
      },
    ]
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
          <Text style={{fontSize: 30, color: '#F103AE'}}>R$ {this.state.faturaAtual}</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.lineStyle}></View>
        </View>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.txtTitFatura}>FATURAS PAGAS</Text>            
          </View>
          <View style={styles.faturasPagas}>
            <Text style={styles.txtDescFatura}>Quantidade: 3</Text>
            <Text style={styles.txtDescFatura}>Valor: R$ 500</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={styles.lineStyle}></View>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.txtTitFatura}>FATURAS PENDENTES</Text>            
          </View>
          <View style={styles.faturasPagas}>
            <Text style={styles.txtDescFatura}>Quantidade: 2</Text>
            <Text style={styles.txtDescFatura}>Valor: R$ 200</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={styles.lineStyle}></View>
          </View>
        <FlatList 
          data={this.state.faturas}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => 
            <View 
            style={styles.list}
            key={item.id}>
              <Text style={styles.txtDescFatura}>CARTÃO: {item.cartao}</Text>
              <Text style={styles.txtDescFatura}>DATA DE VENC: {item.data}</Text>
              <Text style={styles.txtDescFatura}>VALOR: R$ {item.valor}</Text>
            </View>
          } />
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
  list: {
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: '#fff',
    marginTop: 20,
    marginBottom: 20,
    width: '90%',
    alignItems: 'center',
  },
  navegacao: {
    backgroundColor: '#282B33',
    justifyContent: 'space-around',
    height: '7%',
    flexDirection: 'row',
  },
  txtTitFatura: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  txtDescFatura: {
    fontSize: 17,
    color: '#fff',
  },
  faturas: {
    alignItems: 'center',
    marginTop: 25,
  },
  faturasPagas: {
    flexDirection: 'row',
    marginTop: 20,
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

// const mapDispatchToProps = dispatch => {
//   return {
//     onLogout: () => dispatch(logout())
//   }
// }

export default connect(mapStateToProps)(Dashboard);
//export default Dashboard;