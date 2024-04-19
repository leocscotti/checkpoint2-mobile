import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/styles.jsx';

const AddProductScreen = ({ navigation }) => {
  const [nomeVinho, setNomeVinho] = useState('');
  const [uvaVinho, setUvaVinho] = useState('');
  const [anoVinho, setAnoVinho] = useState('');

  async function salvar() {
    if (!nomeVinho.trim() || !uvaVinho.trim() || !anoVinho.trim()) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    let produtos = [];
    if (await AsyncStorage.getItem('VINHOS') !== null) {
      produtos = JSON.parse(await AsyncStorage.getItem('VINHOS'));
    }

    produtos.push({ nome: nomeVinho, uva: uvaVinho, ano: anoVinho });

    await AsyncStorage.setItem('VINHOS', JSON.stringify(produtos));
    alert('VINHO SALVO');
    setNomeVinho('');
    setUvaVinho('');
    setAnoVinho('');
  }

  return (
    <View style={styles.formContainer}>
      <Text style={{ color: 'white' }}>CADASTRO DE VINHOS </Text>
    
      <TextInput
        style={styles.input}
        placeholder="Nome do Vinho"
        value={nomeVinho}
        onChangeText={text => setNomeVinho(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Uva do vinho"
        value={uvaVinho}
        onChangeText={text => setUvaVinho(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Ano do vinho"
        value={anoVinho}
        onChangeText={text => setAnoVinho(text)}
      />

      <TouchableOpacity style={styles.formBtn} onPress={salvar}>
        <Text style={{ color: 'white' }}>CADASTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ListProducts')}>
        <Text style={{ color: 'white' }}>VER VINHOS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnAbout} onPress={() => navigation.navigate('About')}>
        <Text style={{ color: 'white' }}>SOBRE</Text>
      </TouchableOpacity>

    </View>
  );
}

export default AddProductScreen;
