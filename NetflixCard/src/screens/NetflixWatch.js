import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';

const NetflixWatch = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> Netflix Card </Text>
      <View style={styles.poster}>
        <Image
          style={styles.imgStyle}
          source={{
            uri: 'https://www.whats-on-netflix.com/wp-content/uploads/2021/09/netflix-category-codes-2022-1280x720.png',
          }}
        />
        <View style={styles.poster__info}>
          <Text style={styles.poster__title}> All Of Us Dead </Text>
          <Text style={styles.poster__text}>
            Find out why the All of us dead. When an island populated by happy,
            flightless birds is visited by mysterious green piggies, it's up to
            three unlikely outcasts - Red, Chuck and Bomb{' '}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL('https://www.netflix.com/browse')}>
          <Text style={{color: 'white', textAlign: 'center'}}>Watch Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    marginBottom: 20,
    fontFamily: 'Rubik-Medium',
  },
  poster: {
    width: 250,
    borderWidth: 1,
    alignItems: 'center',
  },
  poster__info: {
    alignItems: 'center',
    marginVertical: 10,
  },
  poster__title: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: 'Rubik-Regular',
  },
  poster__text: {
    color: '#999',
    paddingHorizontal: 20,
    marginBottom: 10,
    fontFamily: 'Rubik-Light',
    fontSize: 16,
  },
  imgStyle: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  buttonStyle: {
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: 'blue',
    justifyContent: 'center',
    width: 120,
    height: 40,
  },
});
export default NetflixWatch;
