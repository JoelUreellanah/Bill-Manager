import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ScrollView, Picker } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import MainHeader from '../components/MainHeader';
import UserInput from '../components/UserInput';
import Button from '../components/Button';
import DismissKeyboard from '../components/utils/DismissKeyboard';

class AddNewBill extends Component {


  constructor(props) {
    super(props)

    this.state = ({
      billName: '',
      billCategory: '',
      billAmount: '',
      billContractExpiryDate: '',
      billCardNumber: '',
      errorMessage: ''
    })
  }

  createBill() {

    if (this.state.billName == '' || this.state.billCategory == ''
        || this.state.billAmount == '' || this.state.billContractExpiryDate == ''
        || this.state.billCardNumber == '') {

      console.log('One or more fields are empty')
      this.setState({
        errorMessage: 'Please fill all fields ...'
      });

    } else {
      this.setState({
        errorMessage: ''
      });

      console.log('billName: ' + this.state.billName + " billCategory: " + this.state.billCategory +
                  ' billAmount: ' + this.state.billAmount);

    }

  }

  static navigationOptions = {
    header: null
  }

  render() {
    return(

      <DismissKeyboard>

        <View style={styles.container}>

          <View style={styles.header}>
            <MainHeader headerFirstLine={'ADD A NEW BILL'} headerSecondLine={'New Bill'} onPress={() => this.props.navigation.navigate('UserProfile')}/>
          </View>

          <KeyboardAwareScrollView style={styles.scrollView} contentContainerStyle={{flexGrow : 1, justifyContent : 'flex-start'}}>
            <View style={styles.bodyContainer}>
              <UserInput placeholder={'Name'} value={this.state.billName} onChangeText={billName => this.setState({ billName })} />
              <UserInput placeholder={'Category'} value={this.state.billCategory} onChangeText={billCategory => this.setState({ billCategory })} />
              <UserInput placeholder={'Amount'} value={this.state.billAmount} onChangeText={billAmount => this.setState({ billAmount })} />
              <UserInput placeholder={'Contract Expiry Date (27/10/18)'} value={this.state.bilbillContractExpiryDatelAmount} onChangeText={billContractExpiryDate => this.setState({ billContractExpiryDate })} />
              <UserInput placeholder={'Card Number (Only last 4 digits)'} value={this.state.billCardNumber} onChangeText={billCardNumber => this.setState({ billCardNumber })} />
              <Text>{this.state.errorMessage}</Text>
            </View>
          </KeyboardAwareScrollView>

          <View style={styles.footer}>
            <Button onPress={() => this.createBill()}>Create</Button>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Text style={styles.backButton}>Back</Text></TouchableOpacity>
          </View>

        </View>
      </DismissKeyboard>


    );
  }
}

export default AddNewBill;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  header: {
    height: '15%',
    // backgroundColor: 'red',
    flexDirection: 'row',
  },

  scrollView: {
    height: '30%',
    // backgroundColor: 'yellow',
  },

  bodyContainer: {
    // backgroundColor: 'blue',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 10

  },

  footer: {
    // backgroundColor: 'blue',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1
  },

  backButton: {
    fontWeight: '600',
    color: '#5F5F5F'
  }
});
