import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../styles/Global';
const Home = () => {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.text}>Home Screen</Text>
    </View>
  );
};

export default Home;
