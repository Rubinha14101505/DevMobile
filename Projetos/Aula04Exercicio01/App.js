// Importa as bibliotecas do React e React-Native
import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';

// Componente funcional
const App = () => {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  // função que ao clicar vai aparecer a mensagem com o nome da pessoa, caso ela não tenha
  //digitado nada, vai aparecer um "alerta" pedindo para ela completar com o nome 
  const lidarComClique = () => {
    if (nome) {
      setMensagem(`Olá, ${nome}!`);
    } else {
      setMensagem('Por favor, digite seu nome.');
    }
  };
  
  return (

    <View style={styles.container}>

      {/*exibe imagem */}
      <Image
        source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }}
        style={styles.logo}
      />

      <Text style={styles.titulo}>Exemplo Interativo</Text>

    {/*entrada de texto */}
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        onChangeText={setNome}
        value={nome}
      />
     {/* Botão iterativo */}
      <Button title="Enviar" onPress={lidarComClique} />

      {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
    </View>
  );
};

// Estilizando os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  mensagem: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default App;
