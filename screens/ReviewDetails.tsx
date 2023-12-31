import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../styles/Global';
const ReviewDetails = ({navigation}: {navigation: any}) => {
  const pressHandler = () => {
    navigation.goBack();
  };
  return (
    <View style={GlobalStyles.container}>
      <Text>Review Details</Text>
      <Button title="Back to home screen" onPress={pressHandler} />
    </View>
  );
};

export default ReviewDetails;
