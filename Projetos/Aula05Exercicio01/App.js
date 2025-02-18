// Importa as bibliotecas do React e React-Native
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import logo from '.a/ssets/NativeLogo.png';

//Componente funcional
const App = () => {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  //Função que ao clicar no botão vai verificar se o nome foi digitado e vai atualizar a mensagem com o nome do usuario
  const lidarComClique = () => {
    if (nome) {
      setMensagem(`Olá, ${nome}!`);
    }
  };

  return (
    //rolagem da tela
    <ScrollView style={styles.container}>
      <View style={styles.view}> {/*add imagem e texto */}
        <Image source={{logo}} style={styles.image} />
        <Text style={styles.text}>
          Exemplo de elementos gráficos interativos em React Native
        </Text>
      </View>
      {/*Entrada de texto onde o usuario vai inserir o nome */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          onChangeText={setNome}
          value={nome}
        />
        {/*Botão chamando a função de clicar e mostrar o nome do usuario */}
        <Button title="Enviar" onPress={lidarComClique} />
      </View>
        {/*Se o usuario tiver digitado algo, esse campo é responsavel por mostrar a tela o texto digitado*/}
      {mensagem ? (
        <View style={styles.messageContainer}>
          <Text style={styles.message}>{mensagem}</Text>
        </View>
      ) : null}
        {/*botão customizado*/}
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Botão customizado</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
 //css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  view: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },

  messageContainer: {
    marginBottom: 20,
  },

  message: {
    fontSize: 16,
  },

  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
