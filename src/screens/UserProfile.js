import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import * as firebase from 'firebase';
import SignUpHeader from '../components/SignUpHeader';
import Button from '../components/Button';

class Home extends Component {

  static navigationOptions = {
    header: null
  }

  render() {
    return(

        <View style={styles.container}>

          <SignUpHeader headerFirstLine={'PROFILE'} headerSecondLine={'Your Name'} />
          <Button onPress={() => firebase.auth().signOut()}>Sign Out</Button>

        </View>


    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});
