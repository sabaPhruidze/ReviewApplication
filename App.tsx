import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import HomeStack from './routes/HomeStack';
import AboutStack from './routes/AboutStack';
import Drawer from './routes/Drawer';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#eee" barStyle="dark-content" />
      <GestureHandlerRootView style={{flex: 1}}>
        <Drawer />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

export default App;
