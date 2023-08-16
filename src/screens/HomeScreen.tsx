import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import {styles} from '../themes/appTheme';

interface Props extends StackScreenProps<any, any> {}

const beer = {
  id: 1,
  description:
    'Balanceada entre amargo y maltas caramelo amargor bajo y notas frutales',
  ibu: '26',
  alcohol: '5.3 %',
  name: 'Amber',
};

export const HomeScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/bg.jpg')}
        style={styles.image}>
        <View style={styles.text}>
          <Image
            style={styles.qDrinkIcon}
            source={require('../assets/images/iso3.png')}
          />
          <View style={{alignItems: 'center', width: '100%'}}>
            <Image
              style={styles.tinyLogo}
              source={require('../assets/images/iso.png')}
            />

            <Text style={{...styles.homeText, fontSize: 45}}>{beer.name}</Text>

            <View
              style={{
                //flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
              }}>
              <Text style={{...styles.homeText, fontSize: 20}}>
                IBU: {beer.ibu}
              </Text>
              <Text style={{...styles.homeText, fontSize: 20}}>
                Alcohol: {beer.alcohol}
              </Text>
            </View>
            <Text style={{...styles.homeText, fontSize: 25, lineHeight: 25}}>
              {beer.description}
            </Text>
            <Image
              style={styles.tinyLogo}
              source={require('../assets/images/logo1.png')}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
