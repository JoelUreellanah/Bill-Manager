import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView} from "react-native";
import Modal from "react-native-modal";
import SignUpHeader from '../../components/SignUpHeader';
import UserInput from '../../components/UserInput';
import Button from '../../components/Button';
import List from '../../components/ListView';
import CategoryModal from '../../components/Modals/CategoryModal';
import DismissKeyboard from '../../components/utils/DismissKeyboard';



class BillCategory extends Component {

  constructor(props) {
    super(props)

    this.state = ({
      billName: this.props.navigation.state.params.billName,
      billCategory: '',
      errorMessage: '',
      visibleModal: false,
      picked: '',
    })
  }

  ValidateAndGoToNextPage() {
    if (this.state.billCategory == '') {
      console.log('something is missing')
      this.setState({
        errorMessage: 'Please enter a Bill Name'
      });
    } else {
      this.setState({
        errorMessage: ''
      });

      this.props.navigation.navigate('BillAmount', { billName: this.state.billName, billCategory: this.state.billCategory })
    }
  }

  onSelect = (picked) => {
    this.setState({
      picked: picked,
      visible: false
    })
    this.setState({visibleModal: false});
  }

  renderCategoryText() {
    if(this.state.picked === '') {
      return <Text style={styles.chooseCategoryPlaceholder}>Choose category</Text>
    } else {
      return <Text style={styles.chooseCategoryText}>{this.state.picked}</Text>
    }
  }

  static navigationOptions = {
    header: null
  }

  render() {

    return(

      <DismissKeyboard>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>

          <SignUpHeader headerFirstLine={'CREATE BILL'} headerSecondLine={'Category'}/>

          <View style={styles.bodyContainer}>

            <TouchableOpacity onPress={() => this.setState({visibleModal: !this.state.visibleModal})} style={styles.chooseCategoryContainer}>
              <View>
                {this.renderCategoryText()}
              </View>
            </TouchableOpacity>

            <CategoryModal
            visibleModal={this.state.visibleModal}
            onBackdropPress={() => this.setState({ visibleModal: false })}
            onSelect= {this.onSelect}
            />
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

export default BillCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  bodyContainer: {
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red'
  },

  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },

  chooseCategoryContainer: {
    // backgroundColor: 'blue',
    width: '80%',
    borderBottomColor: '#DDD9E0',
    borderBottomWidth: 1,
    padding: 5

  },

  chooseCategoryPlaceholder: {
    fontSize: 16,
    color: '#575757'
  },

  chooseCategoryText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
  },

  modalListView: {
    alignItems: 'center',
  },

  footer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  backButton: {
    fontWeight: '600',
    color: '#5F5F5F'
  },
});
