/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {StyleSheet, Text, View, Platform, SafeAreaView} from 'react-native';

export default function Header() {
  return (
    <SafeAreaView style={styles.statusBar}>
      <View style={styles.header}>
        <Text style={styles.title}>My Todos</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#FF7F50',
    marginTop: -10,
  },
  statusBar: {
    marginTop: -10,
    backgroundColor: '#FF7F50',
  },
  title: {
    textAlign: 'center',
    color: '#ffffff',
    paddingTop: Platform.OS === 'ios' ? 25 : 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
