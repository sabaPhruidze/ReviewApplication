import {View, Text} from 'react-native';
import React from 'react';
import Home from './screens/Home';
import About from './screens/About';
import ReviewDetails from './screens/ReviewDetails';
const App = () => {
  return (
    <View>
      <Home />
      <About />
      <ReviewDetails />
    </View>
  );
};

export default App;
