import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import LoginImage from '../../media/images/LoginImage';

import SocialButton from '../../components/SocialButton';
import { RootTabScreenProps } from '../../../types';

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 25,
  },
  container: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    marginTop: 150,
    marginBottom: 50,
  },
});

const Login = ({ navigation, user }: any) => {
  GoogleSignin.configure({
    webClientId: '221357654076-b0v66jcjt4jvm14r1eksijkrtekj1lap.apps.googleusercontent.com',
  });
  const onGoogleButtonPress = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const userSignIn = auth().signInWithCredential(googleCredential);

    userSignIn
      .then((user) => {
        navigation.navigate('Root');
      })
      .catch((e) => console.log(e));
  };

  return (
    <View style={styles.view}>
      {/* <View> */}
      {/*  <LoginImage /> */}
      {/* </View> */}
      <View style={styles.container}>
        <Text variant="headlineLarge">
          Bienvenido
        </Text>
      </View>
      <SocialButton type="facebook" navigation={navigation} onClick={() => {}} />
      <SocialButton type="google" navigation={navigation} onClick={onGoogleButtonPress} />
      <SocialButton type="github" navigation={navigation} onClick={() => {}} />

      {/* <View style={[styles.container, styles.socialContainer]}> */}
      {/*  <View style={styles.button}> */}
      {/*    <FontAwesome.Button */}
      {/*      name="facebook" */}
      {/*      backgroundColor="#3b5998" */}
      {/*      borderRadius={10} */}
      {/*      onPress={() => {}} */}
      {/*    > */}
      {/*      Iniciar sesión con Facebook */}
      {/*    </FontAwesome.Button> */}
      {/*  </View> */}
      {/*  <View style={styles.button}> */}
      {/*    <FontAwesome.Button */}
      {/*      name="google" */}
      {/*      backgroundColor="#4285F4" */}
      {/*      onPress={() => {}} */}
      {/*      borderRadius={10} */}
      {/*    > */}
      {/*      Iniciar sesión con Google */}
      {/*    </FontAwesome.Button> */}
      {/*  </View> */}
      {/*  <View style={styles.button}> */}
      {/*    <FontAwesome.Button */}
      {/*      name="github" */}
      {/*      backgroundColor="#23282C" */}
      {/*      onPress={() => {}} */}
      {/*      borderRadius={10} */}
      {/*    > */}
      {/*      Iniciar sesión con GitHub */}
      {/*    </FontAwesome.Button> */}
      {/*  </View> */}
      {/* </View> */}
    </View>
  );
};

export default Login;
