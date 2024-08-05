/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
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
import auth from '@react-native-firebase/auth';
import appleAuth, {
  AppleAuthError,
  AppleAuthRequestScope,
  AppleAuthRequestOperation,
} from '@invertase/react-native-apple-authentication';
import {authFetch} from './Utils';
import {getUniqueId} from 'react-native-device-info';

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  // const handleSignIn = async (data: any) => {
  //   /* Redux actions, persisting data with AsyncStorage, redirection...*/
  // };
  async function appleLogin() {
    // performs login request
    // const appleAuthRes = await appleAuth.performRequest({
    //   requestedOperation: appleAuth.Operation.LOGIN,
    //   requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    // });
    // console.log("apple AuthRes", appleAuthRes)
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    if (!appleAuthRequestResponse.identityToken) {
      throw 'Apple Sign-In failed - no identify token returned';
    }

    const {identityToken, nonce} = appleAuthRequestResponse;
    const appleCredential = auth.AppleAuthProvider.credential(
      identityToken,
      nonce,
    );

    return auth().signInWithCredential(appleCredential);
  }

  const onAuthStateChanged = async userAuth => {
    if (!userAuth) {
      return;
    }
    if (userAuth) {
      console.log(userAuth);
      setUser(userAuth);
    }

    return () => userReference();
  };
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return () => {
      subscriber;
    };
  }, []);

  const signOut = async () => {
    auth().signOut();

    setUser(null);

    return () => userReference();
  };
  //   try {
  //     // make sign in request and return a response object containing authentication data
  //     const appleAuthRequestResponse = await appleAuth.performRequest({
  //       requestedOperation: AppleAuthRequestOperation.LOGIN,
  //       requestedScopes: [
  //         AppleAuthRequestScope.EMAIL,
  //         AppleAuthRequestScope.FULL_NAME,
  //       ],
  //     });

  //     // retrieve identityToken from sign in request
  //     const {identityToken} = appleAuthRequestResponse;

  //     // you may also want to send the device's ID to your server to link a device with the account
  //     const deviceId = getUniqueId();

  //     // identityToken generated
  //     if (identityToken) {
  //       // send data to server for verification and sign in
  //       const {ack, response} = await authFetch({
  //         url: 'sign-in-with-apple',
  //         body: {
  //           ...appleAuthRequestResponse,
  //           deviceId: deviceId,
  //         },
  //       });
  //       if (ack === 'success') {
  //         // successfully verified, handle sign in
  //         await handleSignIn(response);
  //       }
  //     } else {
  //       // no token, failed sign in
  //     }
  //   } catch (error) {
  //     if (error.code === AppleAuthError.CANCELED) {
  //       // user cancelled Apple Sign-in
  //     } else {
  //       // other unknown error
  //     }
  //   }
  // }

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
      <TouchableOpacity onPress={appleLogin} style={styles.btnStyle}>
        <Text style={styles.buttonTitle}>Apple Login</Text>
      </TouchableOpacity>
      {user !== null && (
        <View style={{margin: 10}}>
          <Text style={{margin: 10}}>{user.displayName}</Text>
          <TouchableOpacity onPress={signOut} style={{alignItems: 'center'}}>
            <Text>Sign Out</Text>
          </TouchableOpacity>
        </View>
      )}
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
    marginVertical: 10,
  },
  buttonTitle: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    paddingVertical: 10,
  },
});
export default App;
