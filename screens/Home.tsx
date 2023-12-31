import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../styles/Global';
const Home = ({navigation}: {navigation: any}) => {
  const pressHandler = () => {
    navigation.navigate('ReviewDetails');
  };

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.text}>Home Screen</Text>
      <Button title="Go to review dots" onPress={pressHandler} />
    </View>
  );
};

export default Home;
