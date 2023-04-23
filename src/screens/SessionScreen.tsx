import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../themes/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

export const SessionScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text style={styles.title}>SessionScreen</Text>

      <Text>Navegar con argumentos</Text>
      <View>
        <TouchableOpacity
          style={styles.bigButton}
          onPress={() =>
            navigation.navigate('SettingsScreen', {
              id: 1,
              nombre: 'Pedro',
            })
          }>
          <Text style={styles.BigButtonText}>Pedro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
