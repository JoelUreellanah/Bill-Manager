import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from 'react-native-elements';

const SignUpHeader = (props) => {

  return(

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerFirstText}>{props.headerFirstLine}</Text>
        <Text style={styles.headerSecondText}>{props.headerSecondLine}</Text>
      </View>
      <View style={styles.icon}>
        <Icon
          raised
          name='user'
          type='font-awesome'
          color='black'
          onPress={props.onPress} />
      </View>
    </View>

  );
};

export default SignUpHeader;


const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    flex: 1
  },

  header: {
    // backgroundColor: 'grey',
    // height: '15%',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 30,
    width: '50%'
  },

  headerFirstText: {
    fontWeight: '900',
    fontSize: 14,
    color: '#BFBFBF'
  },

  headerSecondText: {
    fontWeight: '800',
    fontSize: 40
  },

  icon: {
    // backgroundColor: 'blue',
    // height: '15%',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 20,
  }

  });
