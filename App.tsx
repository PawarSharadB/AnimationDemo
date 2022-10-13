/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AnimationDemoScreen from './app/components/AnimationDemoScreen';
import AnimationScreen from './app/components/AnimationScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={AnimationDemoScreen}
        />
        <Stack.Screen
          options={{headerBackButtonMenuEnabled: false, title: 'Animation'}}
          name="animation"
          component={AnimationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
