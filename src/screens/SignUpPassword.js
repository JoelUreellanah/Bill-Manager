import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import * as firebase from 'firebase';
import SignUpHeader from '../components/SignUpHeader';
import UserInput from '../components/UserInput';
import Button from '../components/Button';
import DismissKeyboard from '../components/utils/DismissKeyboard';
import { MaterialIndicator } from 'react-native-indicators';

class SignUpPassword extends Component {

  constructor(props) {
    super(props)

    this.state = ({
      name: this.props.navigation.state.params.name,
      surname: this.props.navigation.state.params.surname,
      email:  this.props.navigation.state.params.email,
      password: '',
      loading: false,
      errorMessage: ''
    })
  }


  ValidateAndCreateAccount() {
    if (this.state.password == '') {
      console.log('something is missing')
      this.setState({
        errorMessage: 'Please fill all field...'
      });
    } else {
      this.setState({
        errorMessage: ''
      });

      this.signUpUser(this.state.email, this.state.password)
    }
  }


  onSignUpSuccess() {
    this.SaveUserCredential();
    this.setState({
      name: '',
      surname: '',
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  SaveUserCredential() {
    const { currentUser } = firebase.auth();

    // firebase.database().ref(`/users/${currentUser.uid}/Credentials`)
    //   .push({this.state.name, this.state.surname, this.state.email, this.state.password });

      const database = firebase.database();
      const ref = database.ref(`/users/${currentUser.uid}/Credentials`);

      const data = {
        name: this.state.name,
        surname: this.state.surname,
        email: this.state.email,
        password: this.state.password
      }

      ref.push(data);
  }


  signUpUser = (email, password) => {
    try {

      if (this.state.password.length < 6) {
        this.setState({
          errorMessage: 'Password must be at least 6 characters long.'
        });
        return;
      }

      this.setState({loading: true});

      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(this.onSignUpSuccess.bind(this))
    } catch (error) {
      console.log(error.toString());
    }
  }

  renderButton() {
    if(this.state.loading) {
      return <MaterialIndicator color='black' />
    }

    return (
      <Button onPress={() => this.ValidateAndCreateAccount()}>Create Account</Button>
    );
  }

  static navigationOptions = {
    header: null
  }

  render() {
    return(

      <DismissKeyboard>

        <KeyboardAvoidingView behaviour="padding" style={styles.container}>

          <SignUpHeader headerFirstLine={'STAY SAFE'} headerSecondLine={'Your Password'}/>


          <View style={styles.bodyContainer}>
            <UserInput placeholder={'Password'} secureTextEntry value={this.state.password} onChangeText={password => this.setState({ password })} />
            <Text>{this.state.errorMessage}</Text>
          </View>

          <View style={styles.footer}>
            {this.renderButton()}
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Text style={styles.backButton}>Back</Text></TouchableOpacity>
          </View>

        </KeyboardAvoidingView>

      </DismissKeyboard>


    );
  }
}

export default SignUpPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
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

  backButton: {
    fontWeight: '600',
    color: '#5F5F5F'
  }
});
