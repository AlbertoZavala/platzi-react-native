import React from 'react';
import { TextInput, Button, Text, View } from 'react-native'

export const LoginForm = () => {
  return (
    <View>
      <Text>Componente Login Form</Text> 
      <TextInput placeholder="Email"></TextInput>
      <TextInput placeholder="Contraseña"></TextInput>
      <Button title="Enviar" onPress={ () => console.log("Enviado") } />
    </View>
  )
}
