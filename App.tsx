import React from 'react';
import {SafeAreaView} from 'react-native';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
import HomeStack from './routes/HomeStack';
import AboutStack from './routes/AboutStack';
import Drawer from './routes/Drawer';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#eee" barStyle="dark-content" />
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
