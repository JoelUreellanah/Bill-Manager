import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import Button from '../components/Button';
import Logo from '../components/Logo';

class SplashScreen extends Component {

  static navigationOptions = {
    header: null
  }

  render() {
    return(
      <View style={styles.container}>

        <View style={styles.logoContainer}>
          <Animatable.View animation="zoomIn" iterationCount={1}>
            <Logo />
          </Animatable.View>
        </View>

        <Animatable.View animation="slideInUp" iterationCount={1} style={styles.loginContainer}>
          <Button style={styles.loginButton} onPress={() => this.props.navigation.navigate('LoginScreen')}>Sign In</Button>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUpName')}><Text style={styles.signupButton}>Sign Up</Text></TouchableOpacity>
        </Animatable.View>


      </View>


    );
  }
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#323C4D',
    backgroundColor: '#27272A',
  },

  logoContainer: {
    height: '60%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'relative',
    bottom: 60
  },

  logoPosition: {
    position: 'absolute',
    bottom: 20
  },

  loginContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  loginButton: {
    alignItems: 'flex-start',
  },

  signupButton: {
    fontWeight: '600',
    color: 'white',
    position: 'relative',
    // top: 25
  }
});
