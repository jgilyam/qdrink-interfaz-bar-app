import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../themes/appTheme';
import {RootStacksParams} from '../navigators/StackNavigator';

interface Props extends StackScreenProps<RootStacksParams, 'SettingsScreen'> {}

export const SettingsScreen = ({navigation, route}: Props) => {
  const params = route.params;

  return (
    <View>
      <Text style={styles.title}>{JSON.stringify(params.nombre, null, 3)}</Text>
      <Button
        title="Ir a Session"
        onPress={() => navigation.navigate('SessionScreen')}
      />
    </View>
  );
};
