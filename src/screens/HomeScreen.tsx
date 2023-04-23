import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button, ImageBackground} from 'react-native';
import {styles} from '../themes/appTheme';
import path from 'path';

const backgroudImage = {uri: '../assets/images/bg.jpg'};

interface Props extends StackScreenProps<any, any> {}

export const HomeScreen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <ImageBackground
        source={backgroudImage}
        resizeMode="cover"
        style={styles.backGroundImage}>
        <Text style={styles.title}>Holaaaa! estoy en el home</Text>

        <Button
          title="Ir a settings"
          onPress={() =>
            navigation.navigate('SettingsScreen', {
              id: 2,
              nombre: 'Juan',
            })
          }
        />
      </ImageBackground>
    </View>
  );
};
