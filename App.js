import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import {createStackNavigator } from 'react-navigation';
import { MaterialIndicator } from 'react-native-indicators';

import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpName from './src/screens/SignUpName';
import SignUpEmail from './src/screens/SignUpEmail';
import SignUpPassword from './src/screens/SignUpPassword';
import Home from './src/screens/Home';
import UserProfile from './src/screens/UserProfile';
import AddNewBill from './src/screens/AddNewBill';

import BillName from './src/screens/CreateBillScreens/BillName';
import BillCategory from './src/screens/CreateBillScreens/BillCategory';


var config = {
  apiKey: "AIzaSyAETya5By9YdwkqcgqUsIpTVOSG9zrutms",
  authDomain: "billmanager-cb9ee.firebaseapp.com",
  databaseURL: "https://billmanager-cb9ee.firebaseio.com",
  projectId: "billmanager-cb9ee",
  storageBucket: "billmanager-cb9ee.appspot.com",
  messagingSenderId: "602713999716"
};
firebase.initializeApp(config);

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = ({
      loggedIn: null
    })
  }

  componentWillMount() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true });
      console.log('User logged in');
    } else {
      this.setState({ loggedIn: false });
      console.log(' No User logged in');
    }
  });
}

  render() {

        switch (this.state.loggedIn) {

          case true:
            return(
              <AppStackNavigatorHome />
            );
          case false:
            return (
              <AppStackNavigatorSplashScreen />
            );

          default:
            return <MaterialIndicator color='black' />
        }

    }


    // render() {
    //   return(
    //     <AppStackNavigatorHome />
    //   );
    // }

  }




const AppStackNavigatorSplashScreen = createStackNavigator({
  SplashScreen: SplashScreen,
  LoginScreen: LoginScreen,
  SignUpName: SignUpName,
  SignUpEmail: SignUpEmail,
  SignUpPassword: SignUpPassword,
  Home: Home,
  UserProfile: UserProfile,
  AddNewBill: AddNewBill,
  BillName: BillName,
  BillCategory: BillCategory,

},
{
  initialRouteName: 'SplashScreen'
  }
);

const AppStackNavigatorHome = createStackNavigator({
  SplashScreen: SplashScreen,
  LoginScreen: LoginScreen,
  SignUpName: SignUpName,
  SignUpEmail: SignUpEmail,
  SignUpPassword: SignUpPassword,
  Home: Home,
  UserProfile: UserProfile,
  AddNewBill: AddNewBill,
  BillName: BillName,
  BillCategory: BillCategory,

},
{
  initialRouteName: 'Home'
  }
);





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
