import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Home Screen</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  Text: {
    fontFamily: 'RubikDoodleShadowRegular',
    fontSize: 20,
  },
});
