import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function TodoItem({item, pressHandler}) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.keyy)}>
      <Text style={styles.box}>{item.txt}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 16,
    marginTop: 16,
    borderColor: '#FF7F50',
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'visible',
  },
});
