/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import Header from './Components/header';
import TodoItem from './Components/todoItem';
import AddTodo from './Components/addTodo';

export default class Splash extends Component<{}> {
  constructor() {
    super();
    this.state = {
      isVisible: true,
    };
  }
  Hide_Splash_Screen = () => {
    this.setState({
      isVisible: false,
    });
  };
  componentDidMount() {
    var that = this;
    setTimeout(function () {
      that.Hide_Splash_Screen();
    }, 2000);
  }
  render() {
    let Splash_Screen = (
      <View style={stylesSplash.SplashScreen_RootView}>
        <View style={stylesSplash.SplashScreen_ChildView}>
          <Image
            style={{width: '100%', height: '100%', resizeMode: 'stretch'}}
            source={require('./Components/src/assets/ic_splashbase.png')}
          />
        </View>
      </View>
    );
    return (
      <View style={{width: '100%', height: '100%', resizeMode: 'stretch'}}>
        <View style={{width: '100%', height: '100%', resizeMode: 'stretch'}}>
          <App />
        </View>
        {this.state.isVisible === true ? Splash_Screen : null}
      </View>
    );
  }
}

function App() {
  const [todos, setTodos] = useState([
    {txt: 'Buy coffee', keyy: '1'},
    {txt: 'Create an App', keyy: '2'},
    {txt: 'Play on the switch', keyy: '3'},
    {txt: 'Play on the switch', keyy: '4'},
  ]);

  const pressHandler = keyy => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.keyy != keyy);
    });
  };

  const submitHandler = text => {
    setTodos(prevTodos => {
      return [{txt: text, keyy: Math.random().toString()}, ...prevTodos];
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
    height: '100%',
  },
});

const stylesSplash = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : 20,
  },

  SplashScreen_RootView: {
    justifyContent: 'center',
    flex: 1,
    margin: 0,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  SplashScreen_ChildView: {
    backgroundColor: '#00BCD4',
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
