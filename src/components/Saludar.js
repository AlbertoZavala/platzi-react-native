import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

export const Saludar = ({ firstname, lastname }) => {
  return (
    <View>
      <Text>  { `Hola ${firstname} ${lastname}` }</Text>
    </View>
  )
}

// Saludar.defaultProps = {
//   firstname: "Homero",
//   lastname: "Tompson"
// }

Saludar.propTypes = {
  firstname: PropTypes.string.isRequired  
}