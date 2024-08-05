/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import ChallengeFlatList from './src/screens/NetflixChallenge';
import DemoStyles from './src/screens/DemoFlexbox';
import NetflixWatch from './src/screens/NetflixWatch';
import CounterNumber from './src/screens/CounterNumber';
import Login from './src/screens/Login';

const NetflixCard = () => {
  return (
    <View>
      {/* <ChallengeFlatList /> */}
      <NetflixWatch />
      {/* <DemoStyles /> */}
      {/* <CounterNumber /> */}
    </View>
  );
};

export default NetflixCard;
