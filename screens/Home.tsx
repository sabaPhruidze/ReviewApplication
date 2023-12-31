import {View, Text, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';
import {GlobalStyles} from '../styles/Global';
const Home = ({navigation}: {navigation: any}) => {
  const pressHandler = () => {
    navigation.navigate('ReviewDetails');
    // navigation.push('ReviewDetails');
  };
  const [reviews, setReviews] = useState([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum',
      key: '1',
    },
    {
      title: 'Gotta Catch Them All (again)',
      rating: 4,
      body: 'lorem ipsum',
      key: '2',
    },
    {title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3'},
  ]);
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.text}>Home Screen</Text>
      <Button title="Go to review dots" onPress={pressHandler} />
    </View>
  );
};

export default Home;
