import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import HomeStack from './routes/HomeStack'; // Adjust the path based on your project structure

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#eee" barStyle="dark-content" />
      <GestureHandlerRootView style={{flex: 1}}>
        <HomeStack />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

export default App;
