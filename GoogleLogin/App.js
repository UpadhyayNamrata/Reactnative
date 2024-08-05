/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {
  LoginManager,
  GraphRequest,
  GrapdRequestManager,
} from 'react-native-fbsdk';

const App = () => {
  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  const fbLogin = resCallback => {
    LoginManager.logOut();
    return LoginManager.logInWithPermissions(['email', 'public_profile']).then(
      result => {
        console.log('fb result==>>>>>>>', result);
        if (
          result.declinedPermissions &&
          result.declinedPermissions.includes('email')
        ) {
          resCallback({message: 'Email is required'});
        }
        if (result.isCancelled) {
          console.log('error');
        } else {
          const infoRequest = new GraphRequest(
            '/me?fields=email,name,picture',
            null,
            resCallback,
          );
          new GrapdRequestManager().addRequest(infoRequest).start();
        }
      },
      function (error) {
        console.log('Login fail with error' + error);
      },
    );
  };

  const onFbLogin = async () => {
    try {
      await fbLogin(_responseInfoCallBack);
    } catch (error) {
      console.log('error raised', error);
    }
  };

  const _responseInfoCallBack = async (error, result) => {
    if (error) {
      console.log('error top', error);
      return;
    } else {
      const userData = result;
      console.log('fb data+++++', userData);
    }
  };

  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('user info', userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log(error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log(error);
      } else {
        // some other error happened
        console.log(error);
      }
    }
  };
  return (
    <View style={{alignContent: 'center', justifyContent: 'center', flex: 1}}>
      <GoogleSigninButton
        style={{
          width: 192,
          height: 48,
          alignSelf: 'center',
          marginVertical: 10,
          justifyContent: 'center',
        }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={googleLogin}
        // disabled={this.state.isSigninInProgress}
      />
      <TouchableOpacity onPress={onFbLogin} style={styles.btnStyle}>
        <Text style={styles.buttonTitle}>Fb Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnStyle: {
    backgroundColor: 'blue',
    borderColor: 'blue',
    borderWidth: 5,
    borderRadius: 15,
    width: 150,
    height: 48,
    alignSelf: 'center',
  },
  buttonTitle: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    paddingVertical: 10,
  },
});
export default App;
