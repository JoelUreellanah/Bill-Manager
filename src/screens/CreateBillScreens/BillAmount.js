import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import ModalFilterPicker from 'react-native-modal-filter-picker'
import SignUpHeader from '../../components/SignUpHeader';
import UserInput from '../../components/UserInput';
import Button from '../../components/Button';
import DismissKeyboard from '../../components/utils/DismissKeyboard';

class SignUpEmail extends Component {

  constructor(props) {
    super(props)

    this.state = ({
      billName: this.props.navigation.state.params.billName,
      billCategory: this.props.navigation.state.params.billCategory,
      billAmount: ''
      errorMessage: ''
    })
  }

  ValidateAndGoToNextPage() {
    if (this.state.billAmount == '') {
      console.log('something is missing')
      this.setState({
        errorMessage: 'Please enter a Bill Name'
      });
    } else {
      this.setState({
        errorMessage: ''
      });

      this.props.navigation.navigate('BillCard', { billName: this.state.billName, billCategory: this.state.billCategory, billAmount: this.state.billAmount })
    }
  }


  static navigationOptions = {
    header: null
  }

  render() {
    return(

      <DismissKeyboard>

        <KeyboardAvoidingView behavior="padding" style={styles.container}>

          <SignUpHeader headerFirstLine={'CREATE BILL'} headerSecondLine={'Amount'}/>


          <View style={styles.bodyContainer}>
            <UserInput placeholder={'Bill Category'} value={this.state.billCategory} onChangeText={billCategory => this.setState({ billCategory })} />
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

export default SignUpEmail;

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
