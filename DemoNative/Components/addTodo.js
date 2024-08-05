import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function AddTodo({submitHandler}) {
  const [text1, setText] = useState('');
  const changeHandler = val => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter new todo..."
        onChangeText={changeHandler}
      />
      <TouchableOpacity onPress={() => submitHandler(text1)}>
        <View style={styles.button}>
          <Text style={styles.title}>{'Add Todo'}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => submitHandler(text1)}>
        <View style={styles.radiobutton}>
          {/* <Text style={styles.title}>{'Add Todo'}</Text> */}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  button: {
    backgroundColor: '#FF7F50',
    height: 40,
    justifyContent: 'center',
    borderRadius: 20,
  },
  radiobutton: {
    backgroundColor: '#FF7F50',
    height: 20,
    width: 20,
    justifyContent: 'center',
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    borderRadius: 20,
    textAlign: 'center',
  },
});
