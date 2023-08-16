import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  globalMargin: {
    marginHorizontal: 20,
    flex: 1,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  bigButton: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BigButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backGroundImage: {
    flex: 1,
    resizeMode: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 250,
    height: 200,
    resizeMode: 'contain',
  },
  qDrinkIcon: {
    height: 100,
    width: 100,
  },
  homeText: {
    color: 'white',
    fontSize: 30,
    lineHeight: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    // backgroundColor: 'yellow',
  },
});
