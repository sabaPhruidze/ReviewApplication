import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import HomeStack from './routes/HomeStack'; // Adjust the path based on your project structure

const App = () => {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex: 1}}>
        <HomeStack />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

export default App;
