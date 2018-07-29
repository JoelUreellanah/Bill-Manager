import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Input } from "react-native";
import * as firebase from 'firebase';
import SignUpHeader from '../components/SignUpHeader';
import UserInput from '../components/UserInput';
import Button from '../components/Button';
import DismissKeyboard from '../components/utils/DismissKeyboard';
import { MaterialIndicator } from 'react-native-indicators';




class LoginScreen extends Component {


constructor(props) {
  super(props)

  this.state = ({
    email: '',
    password: '',
    loading: false
  })
}

  signInUser = (email, password) => {
    try {

      if (this.state.password.length < 6) {
        console.log("Password mudt be at least 6 characters!");
        return;
      }

      this.setState({loading: true});

      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
    } catch (error) {
      console.log(error.toString());
    }
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  static navigationOptions = {
    header: null
  }



  renderButton() {
    if(this.state.loading) {
      return <MaterialIndicator color='black' />
    }

    return (
      <Button onPress={() => this.signInUser(this.state.email, this.state.password)}>Login</Button>

    );
  }

  render() {
    return(
      <DismissKeyboard>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>

        <SignUpHeader headerFirstLine={'GET STARTED'} headerSecondLine={'Login'}/>


        <View style={styles.bodyContainer}>
          <UserInput placeholder='Email' value={this.state.email} onChangeText={email => this.setState({ email })}/>
          <UserInput placeholder='Password' secureTextEntry value={this.state.password} onChangeText={password => this.setState({ password })}/>
        </View>

        <Text>{this.state.error}</Text>


        <View style={styles.footer}>

          {this.renderButton()}
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Text style={styles.signupButton}>Back</Text></TouchableOpacity>
        </View>




        </KeyboardAvoidingView>
      </DismissKeyboard>
    );
  }
}

export default LoginScreen;


const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1
    },

    bodyContainer: {
      height: '60%',
      justifyContent: 'center',
      alignItems: 'center'
    },

    footer: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },

    signupButton: {
      fontWeight: '600',
      color: '#5F5F5F'
    }

  });
