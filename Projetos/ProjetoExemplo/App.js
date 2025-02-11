import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  const [text, setText] = useState('');

  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.title}>Meu App</Text>
      </View>

      <Image 
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.logo}
      />

      <TextInput 
        style={styles.input}
        placeholder="Digite algo..."
        value={text}
        onChangeText={(text) => setText(text)} 
      />

      <Text style={styles.textOutput}>Você digitou: {text}</Text>

      <Button title="Pressione-me" onPress={() => alert("Botão pressionado!")} />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#0000ff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  logo: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    marginBottom: 10,
  },
  textOutput: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
});
