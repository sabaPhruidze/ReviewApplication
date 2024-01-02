import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../styles/Global';
import {Reviews} from './Home';
function ReviewDetails({navigation, route}: {navigation: any; route: any}) {
  const pressHandler = () => {
    navigation.goBack();
  };
  const {title, body, rating} = route.params;
  return (
    <View style={GlobalStyles.container}>
      <Text>{title}</Text>
      <Text>{body}</Text>
      <Text>{rating}</Text>
      <Button title="Back to home screen" onPress={pressHandler} />
    </View>
  );
}

export default ReviewDetails;
