import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { ProdutosContext } from '../context/ProdutosContext.jsx';
import styles from '../styles/styles.jsx';

const AboutScreen = () => {
  
  const { pessoa1, pessoa2 } = useContext(ProdutosContext);
  

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginBottom: 10, color: 'white' }}>Membros da dupla:</Text>
      <View style={styles.personContainer}>
        <View style={styles.person}>
          <Text style={styles.personText}>{pessoa1.nome}</Text>
          <Text style={styles.personText}>{pessoa1.rm}</Text>
          <Image source={pessoa1.foto} style={styles.personImage} />
        </View>
        <View style={styles.person}>
          <Text style={styles.personText}>{pessoa2.nome}</Text>
          <Text style={styles.personText}>{pessoa2.rm}</Text>
          <Image source={pessoa2.foto} style={styles.personImage} />
        </View>
      </View>
    </View>
  );
}

export default AboutScreen;
