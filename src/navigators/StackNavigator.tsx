import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, SettingsScreen, SessionScreen} from '../screens/';

export type RootStacksParams = {
  HomeScreen: undefined;
  SessionScreen: undefined;
  SettingsScreen: {
    id: number;
    nombre: string;
  };
};

const Stack = createStackNavigator<RootStacksParams>();

export function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="HomeScreen"
        options={{title: 'Home'}}
        component={HomeScreen}
      />
      <Stack.Screen
        name="SessionScreen"
        options={{title: 'Session'}}
        component={SessionScreen}
      />
      <Stack.Screen
        name="SettingsScreen"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Stack.Navigator>
  );
}
