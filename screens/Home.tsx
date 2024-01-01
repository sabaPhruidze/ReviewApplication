import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import {GlobalStyles} from '../styles/Global';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
export interface Reviews {
  title: string;
  rating: number;
  body: string;
  key: string;
}

function Home({navigation}: {navigation: StackNavigationProp<any>}) {
  // const pressHandler = () => {
  //   navigation.navigate('ReviewDetails');
  //   // navigation.push('ReviewDetails');
  // };

  const [reviews, setReviews] = useState<Reviews[]>([
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
      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Text style={GlobalStyles.text}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default Home;
