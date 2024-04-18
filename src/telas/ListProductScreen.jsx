import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/styles.jsx';

const ListProductsScreen = ({ navigation }) => {
  const [listProdutos, setListProdutos] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      buscarDados();
    });

    return unsubscribe;
  }, [navigation]);

  async function buscarDados() {
    const p = await AsyncStorage.getItem('VINHOS');
    setListProdutos(JSON.parse(p) || []);
  }

  return (
    <View style={styles.container}>
      <Text style={{ color: 'white' }}>LISTA DE PRODUTOS</Text>

      <FlatList
        data={listProdutos}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('DeleteProduct', { produto: item })}>
            <Text style={{ fontSize: 18, color: 'white'}}>NOME: {item.nome} UVA: {item.uva} ANO: {item.ano}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('AddProduct')}>
        <Text style={{ color: 'white' }}>ADICIONAR VINHO</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ListProductsScreen;
