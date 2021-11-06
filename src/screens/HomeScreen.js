import React from 'react'
import { View, Text, Button, SafeAreaView } from 'react-native'

export const HomeScreen = ({ navigation }) => {

  const goToSettings = () => {
    navigation.navigate("Settings");
  }

  return (
    <SafeAreaView>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Button title="Ir a Configuración" onPress={ goToSettings } /> 
    </SafeAreaView>
  )
}
