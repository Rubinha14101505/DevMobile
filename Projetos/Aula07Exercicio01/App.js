import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OlaPerfilClasse from './componentes/OlaPerfilClasse';
import OlaPerfilFuncao from './componentes/OlaPerfilFuncao';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <OlaPerfilClasse
        nome="Ana Rúbia Classe"
        endereco="São Carlos - SP"
        telefone="+55 (16)996051490"
      />
      <OlaPerfilFuncao
        nome="Ana Rúbia Função"
        endereco="São Carlos - SP"
        telefone="+55 (16)996051490"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
