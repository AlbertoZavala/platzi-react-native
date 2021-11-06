import React from 'react'
import { View, Text, Button, SafeAreaView } from 'react-native'

export const SettingsScreen = ({ navigation }) => {

  const goToHome = (pageName) => {
    navigation.navigate(pageName);
  }

  return (
    <SafeAreaView>
      <Text>Settings Screen</Text>
      <Text>Settings Screen</Text>
      <Text>Settings Screen</Text>
      <Text>Settings Screen</Text>
      <Text>Settings Screen</Text>
      <Text>Settings Screen</Text>
      <Text>Settings Screen</Text>
      <Button title="Ir a Inicio" onPress={ () => goToHome("Home") } />
    </SafeAreaView>
  )
}



