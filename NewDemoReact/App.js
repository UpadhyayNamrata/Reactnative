/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  Platform,
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class Myapp extends Component<{}> {
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

  state = {
    email: '',
    password: '',
  };
  handleEmail = text => {
    this.setState({email: text});
  };
  handlePassword = text => {
    this.setState({password: text});
  };
  login = (email, pass) => {
    alert('email: ' + email + ' password: ' + pass);
  };

  register = (email, pass) => {
    alert('email: ' + email + ' password: ' + pass);
  };

  componentDidMount() {
    var that = this;
    setTimeout(function () {
      that.Hide_Splash_Screen();
    }, 2000);
  }

  render() {
    let Splash_Screen = (
      <View style={styles.SplashScreen_RootView}>
        <View style={styles.SplashScreen_ChildView}>
          <Image
            style={{width: '100%', height: '100%', resizeMode: 'stretch'}}
            source={require('./src/assets/ic_splashbase.png')}
          />
        </View>
      </View>
    );
    return (
      <View style={styles.MainContainer}>
        <View style={stylesTextInput.container}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 100,
              marginTop: 100,
            }}>
            <Image
              source={require('./src/assets/ic_splashbase.png')}
              style={stylesTextInput.backgroundImage}
            />
          </View>
          <View>
            <TextInput
              style={stylesTextInput.input}
              underlineColorAndroid="transparent"
              placeholder="Email"
              placeholderTextColor="#0032A5"
              autoCapitalize="none"
              onChangeText={this.handleEmail}
            />

            <TextInput
              style={stylesTextInput.input}
              underlineColorAndroid="transparent"
              placeholder="Password"
              placeholderTextColor="#0032A5"
              autoCapitalize="none"
              onChangeText={this.handlePassword}
            />

            <TouchableOpacity
              style={stylesTextInput.submitButton}
              onPress={() => this.login(this.state.email, this.state.password)}>
              <Text style={stylesTextInput.submitButtonText}> Login </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={stylesTextInput.submitButton}
              onPress={() =>
                this.register(this.state.email, this.state.password)
              }>
              <Text style={stylesTextInput.submitButtonText}> Register </Text>
            </TouchableOpacity>
          </View>
        </View>
        {this.state.isVisible === true ? Splash_Screen : null}
      </View>
    );
  }
}
const styles = StyleSheet.create({
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

const stylesTextInput = StyleSheet.create({
  container: {
    paddingTop: 80,
  },
  input: {
    marginVertical: 15,
    marginHorizontal: 25,
    padding: 10,
    height: 40,
    borderColor: '#0032A5',
    borderWidth: 1,
    borderRadius: 10,
  },
  submitButton: {
    backgroundColor: '#0032A5',
    padding: 10,
    textAlign: 'center',
    marginVertical: 10,
    marginHorizontal: 100,
    height: 40,
    borderRadius: 10,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  backgroundImage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
  },
});
