import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import {GlobalStyles} from '../styles/Global';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
export interface Reviews {
  title: string;
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
      title: 'Law of Attraction',
      body: "The belief that thoughts and emotions can attract positive or negative experiences into one's life. Your mindset shapes your reality.",
      key: '1',
    },
    {
      title: 'Positive Thinking',
      body: ' Emphasizes the importance of focusing on positive thoughts and emotions to manifest desired outcomes.',
      key: '2',
    },
    {
      title: 'Visualization',
      body: ' The act of imagining and visualizing goals as a powerful tool for bringing them into reality.',
      key: '3',
    },
    {
      title: 'Affirmations',
      body: 'Positive statements and beliefs repeated to encourage a positive mindset and attract corresponding experiences.',
      key: '4',
    },
    {
      title: 'Gratitude Practices',
      body: ' Expressing gratitude for what you have attracts more positive experiences.',
      key: '5',
    },
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
