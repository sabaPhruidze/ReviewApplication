import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const Stack = createNativeStackNavigator();

// Common options for both screens
const commonScreenOptions = {
  headerStyle: {
    backgroundColor: '#eee',
  },
  headerTitleStyle: {
    fontSize: 24,
  },
  headerTintColor: '#444',
};

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={commonScreenOptions}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={commonScreenOptions}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
