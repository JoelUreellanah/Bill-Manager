import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from 'react-native-elements';

const SignUpHeader = (props) => {

  return(


      <TouchableOpacity style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.headerText}>Next Payment Due</Text>
        </View>

        <View style={styles.billDetails}>
        <View style={styles.icon}>
          <Icon
            name='spotify'
            type='font-awesome'
            color='green'
            size={50}/>
          </View>

          <View style={styles.billNameContainer}>
            <Text style={styles.billName}>Spotify</Text>
            <Text style={styles.billCategory}>Music</Text>
          </View>

          <View style={styles.moneyContainer}>

            <View style={styles.currencySignContainer}>
                <Text style={styles.currencySign}>£</Text>
            </View>

            <View style={styles.moneyTextContainer}>
              <Text style={styles.moneyText}>9.99</Text>
            </View>

          </View>

        </View>

        <View style={styles.dueDate}>
          <Text style={styles.dueDateText}>Jul 3rd, 2018</Text>
        </View>
      </TouchableOpacity>


  );
};

export default SignUpHeader;


const styles = StyleSheet.create({

  container: {
    borderColor: '#E3E3E3',
    borderWidth: 1,
    borderRadius: 4,
    width: '90%',
  },

  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15
  },

  headerText: {
    fontWeight: '100',
    fontSize: 14,
    color: '#000000',
    paddingTop: 10
  },

  billDetails: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },

  billNameContainer: {
  },

  billName: {
    fontWeight: '400',
    fontSize: 28,
  },

  billCategory: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 3,
    color: '#BFBFBF'
  },

  icon: {
    // backgroundColor: 'blue',
    // height: '15%',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  category: {

  },

  moneyContainer: {
    // backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  moneyTextContainer: {
    alignItems: 'flex-end',
    paddingRight: 15,
    paddingBottom: 10
  },

  moneyText: {
    fontSize: 38,
    fontWeight: '500',
  },

  currencySignContainer: {
    paddingBottom: 25,
    marginRight: 5
  },

  currencySign: {
    fontSize: 16,
    fontWeight: '300'
  },

  dueDate: {
    alignItems: 'flex-end',
    marginRight: 20,
    paddingBottom: 10
  },

  dueDateText: {
    color: '#7E7E7E',
    fontWeight: '600'
  }


  });
