import {View, Text} from 'react-native';
import React from 'react';
import Home from './screens/Home';
import HomeStack from './routes/HomeStack';
import {NavigationContainer} from '@react-navigation/native';
// import HomeStack from './routes/HomeStack';
const App = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};

export default App;
