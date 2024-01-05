import {View, Text, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../styles/Global';
import {Reviews} from './Home';
function ReviewDetails({navigation, route}: {navigation: any; route: any}) {
  const pressHandler = () => {
    navigation.goBack();
  };
  const {title, body} = route.params;
  return (
    <View style={GlobalStyles.reviewContainer}>
      <View>
        <Text style={GlobalStyles.details}>{title}</Text>
        <Text style={[GlobalStyles.space, GlobalStyles.text]}>{body}</Text>
      </View>
      <TouchableOpacity
        style={[GlobalStyles.space, GlobalStyles.button]}
        onPress={pressHandler}>
        <Text style={{color: 'black', fontFamily: 'NunitoBold', fontSize: 14}}>
          Go back to the Home page
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default ReviewDetails;
