import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import SignUpHeader from '../components/SignUpHeader';
import UserInput from '../components/UserInput';
import Button from '../components/Button';
import DismissKeyboard from '../components/utils/DismissKeyboard';

class SignUpName extends Component {

  constructor(props) {
    super(props)

    this.state = ({
      firstName: '',
      lastName: '',
      errorMessage: ''
    })
  }

  ValidateAndGoToNextPage() {
    if (this.state.firstName == '' || this.state.lastName == '') {
      console.log('something is missing')
      this.setState({
        errorMessage: 'Please fill all field...'
      });
    } else {
      this.setState({
        errorMessage: ''
      });

      this.props.navigation.navigate('SignUpEmail', { name: this.state.firstName, surname: this.state.lastName })
    }
  }

  static navigationOptions = {
    header: null
  }

  render() {
    return(

      <DismissKeyboard>

        <KeyboardAvoidingView behaviour="padding" style={styles.container}>

          <SignUpHeader headerFirstLine={'WHO ARE YOU'} headerSecondLine={'Your Name'}/>


          <View style={styles.bodyContainer}>
            <UserInput placeholder={'First Name'} value={this.state.firstName} onChangeText={firstName => this.setState({ firstName })}/>
            <UserInput placeholder={'Last Name'} value={this.state.lastName} onChangeText={lastName => this.setState({ lastName })}/>
            <Text>{this.state.errorMessage}</Text>
          </View>

          <View style={styles.footer}>
            <Button onPress={() => this.ValidateAndGoToNextPage()}>Next</Button>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Text style={styles.backButton}>Back</Text></TouchableOpacity>
          </View>

        </KeyboardAvoidingView>

      </DismissKeyboard>


    );
  }
}

export default SignUpName;

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
