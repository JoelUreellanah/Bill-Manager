import React, { Component } from 'react';
import { View, ListView, TouchableOpacity, Text, TextInput, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import {createStackNavigator } from 'react-navigation';
import * as Animatable from 'react-native-animatable';
import Modal from "react-native-modal";
import UserInput from '../../components/UserInput';
import List from '../../components/ListView';
import Button from '../../components/Button';
import { Icon } from 'react-native-elements';
import DismissKeyboard from '../../components/utils/DismissKeyboard';

class CategoryModal extends Component {
handleViewRef = ref => this.view = ref;
heandleHeaderRef = ref => this.header = ref;
slideOutLeft = () => this.view.slideOutLeft(100).then(endState => this.setState({plusIconIsClicked: true}));
slideOutRight = () => this.header.slideOutRight(100).then(endState => this.setState({plusIconIsClicked: false}));


  constructor(props) {
    super(props);
    this.state = ({
      plusIconIsClicked: false,
      userCategory: '',
      options: [
         {
            id: 0,
            option: 'Music',
         },
         {
            id: 1,
            option: 'Entertainment',
         },
         {
            id: 2,
            option: 'Broadband',
         },
         {
            id: 3,
            option: 'Office',
         },
         {
            id: 4,
            option: 'Games',
         },
         {
            id: 5,
            option: 'Others',
         },
      ]
    })
  }



  renderModalBody() {
    if (this.state.plusIconIsClicked) {

      return (
        <DismissKeyboard>
        <Animatable.View ref={this.heandleHeaderRef} animation="slideInRight" duration={300} iterationCount={1}>

        <View style={styles.header2} >
        <View style = {styles.backArrowIconContainer}>
        <Icon
          name='chevron-left'
          type='octicon'
          size={40}
          color='black'
          onPress={this.slideOutRight}
          />
          </View>
          </View>

          <View style={styles.userCategoryInput}>
          <UserInput placeholder='Type a new category' value={this.state.userCategory} onChangeText={userCategory => this.setState({ userCategory })}/>
          </View>

          <View style={styles.footer}>
          <Button onPress={() => console.log(this.state.userCategory)}>Create</Button>
          </View>
          </Animatable.View>
          </DismissKeyboard>

        );
    } else {

      return (

        <Animatable.View style={styles.modalContent} ref={this.handleViewRef} animation="slideInLeft" duration={300} iterationCount={1}>
        <View style={styles.header} >
        <View style = {styles.textInputContainer}>
          <Icon
            name='search'
            type='evilicon'
            size={20}
            color='#8E8E93'
            style={styles.icon}
            />

          <TextInput
          style = {styles.filterTextInput}
          placeholder={'Search category'}
          />
        </View>

        <View style = {styles.addIconContainer}>
        <Icon
          name='add'
          type='ionicons'
          size={35}
          color='black'
          onPress={this.slideOutLeft}
          />
          </View>
          </View>

          <View style={styles.scrollViewList}>
          <List
            options={this.state.options}
            onSelect={this.props.onSelect}/>
          </View>


          </Animatable.View>
      );
    }
  }


  render () {


    const {onBackdropPress, visibleModal, onSelect} = this.props;

    return(

      <Modal
      isVisible={visibleModal}
      onBackdropPress={onBackdropPress}
      >
      <KeyboardAvoidingView behavior="padding" style={styles.modalContainer} >


        { this.renderModalBody()}


      </KeyboardAvoidingView>
      </Modal>



    );
  }
}

export default CategoryModal

const styles = StyleSheet.create({


  modalContainer: {
    backgroundColor: "white",
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 6,
    height: '40%',
    overflow: 'hidden'
    // borderColor: "rgba(0, 0, 0, 0.1)",
  },
  modalContent: {
    // backgroundColor: 'green'
  },

  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    // height: '14%',
    marginBottom: 10,
    // backgroundColor: 'red'
  },

  header2: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // height: '14%',
    marginBottom: 10,
    // backgroundColor: 'red'
  },

  textInputContainer: {
    backgroundColor: '#EAE9EA',
    width: '85%',
    height: '100%',
    borderRadius: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
  },

  userCategoryInput: {
    flex: 1,
    // backgroundColor: 'brown',
    alignItems: 'center',
    justifyContent: 'center'
  },

  filterTextInput: {
    paddingLeft: 7,
    flex: 1,
    color: '#8E8E93',
    fontSize: 16,
    fontWeight: '400'
  },

  addIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },

  backArrowIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    // backgroundColor: 'blue',
  },

  scrollViewList: {
    flex: 1,
  },

  footer: {

    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'black'
  }
});
