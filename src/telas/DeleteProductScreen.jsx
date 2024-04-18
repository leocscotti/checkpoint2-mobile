import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/styles.jsx';

const DeleteProductScreen = ({ route, navigation }) => {
  const { produto } = route.params;

  async function deletarProduto() {
    let produtos = await AsyncStorage.getItem('VINHOS');
    produtos = JSON.parse(produtos).filter((item) => item.nome !== produto.nome);
    await AsyncStorage.setItem('VINHOS', JSON.stringify(produtos));
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style= {{color: 'white'}}>EXCLUIR VINHO</Text>
      <Text style={{ fontSize: 18, color: 'white' }}>NOME: {produto.nome}</Text>
      <Text style={{ fontSize: 18, color: 'white' }}>UVA: {produto.uva}</Text>
      <Text style={{ fontSize: 18, color: 'white'}}>ANO: {produto.ano}</Text>

      <TouchableOpacity style={styles.btnDelete} onPress={deletarProduto}>
        <Text style={{ color: 'white' }}>EXCLUIR</Text>
      </TouchableOpacity>
    </View>
  );
}

export default DeleteProductScreen;
