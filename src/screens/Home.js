import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import firebase from 'firebase';
import MainHeader from '../components/MainHeader';
import Button from '../components/Button';
import BillCard from '../components/BillCard';
import AddBill from '../components/AddBill';
import AddNewBill from '../screens/AddNewBill';
import BillName from '../screens/CreateBillScreens/BillName';

class Home extends Component {

  constructor(props) {
    super(props)

    this.state = ({
      stores: []
    })
  }

  componentWillMount() {
    const { currentUser } = firebase.auth();
    const database = firebase.database();
    const ref = database.ref(`/users/${currentUser.uid}/Credentials`);

    // ref.once('value').then(snapshot => {
    //   this.setState({ stores: snapshot.val()});
    //   console.log(snapshot.val());
    // });


    // Retrieve new posts as they are added to our database
    ref.on("child_added", function(snapshot, prevChildKey) {
      var newPost = snapshot.val();
      console.log("User: " + newPost.name + " " + newPost.surname);
    });
  }

  static navigationOptions = {
    header: null
  }

  render() {
    return(
      <View style={styles.container}>

        <View style={styles.header}>
          <MainHeader headerFirstLine={'WELCOME'} headerSecondLine={'HOME'} onPress={() => this.props.navigation.navigate('UserProfile')}/>
        </View>

        <View style={styles.billCard}>
          <BillCard />
        </View>

        <View style={styles.addBill}>
          <AddBill onPress={() => this.props.navigation.navigate('BillName')}>Add Bill</AddBill>
        </View>

        </View>

    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  header: {
    height: '15%',
    // backgroundColor: 'red',
    flexDirection: 'row',
    marginBottom: 20
  },

  bodyContainer: {
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue'
  },

  footer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  billCard: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '22%',
  },

  backButton: {
    fontWeight: '600',
    color: '#5F5F5F'
  },

  addBill: {
    alignItems: 'center',
  }
});
