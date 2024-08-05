import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';

const CounterNumber = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Alert('I am clicked');
    console.log('useEffect print');
  }, [counter]);

  return (
    <View style={styles.container}>
      <Text style={styles.titleView}>{counter}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCounter(counter + 20)}>
        <Text style={styles.title}>+10</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setCounter(0)}>
        <Text style={styles.title}>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (counter > 0) {
            setCounter(counter - 10);
          }
        }}>
        <Text style={styles.title}>-10</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: 30,
    marginBottom: 20,
    borderWidth: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: 150,
    height: 40,
    color: 'white',
    textAlign: 'center',
    paddingTop: 10,
  },
  titleView: {
    width: 150,
    height: 40,
    marginBottom: 10,
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    paddingTop: 10,
  },
});
export default CounterNumber;
