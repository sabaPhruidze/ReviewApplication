import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import About from '../screens/About';

const Stack = createNativeStackNavigator();

const ScreenOptions = {
  headerStyle: {
    backgroundColor: '#eee',
  },
  headerTitleStyle: {
    fontSize: 24,
  },
  headerTintColor: '#444',
  headerShown: false
};

function AboutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={About} options={ScreenOptions} />
    </Stack.Navigator>
  );
}

export default AboutStack;
