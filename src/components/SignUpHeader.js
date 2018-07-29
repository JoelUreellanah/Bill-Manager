import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const SignUpHeader = (props) => {

  return(

    <View style={styles.header}>
      <Text style={styles.headerFirstText}>{props.headerFirstLine}</Text>
      <Text style={styles.headerSecondText}>{props.headerSecondLine}</Text>
    </View>

  );
};

export default SignUpHeader;


const styles = StyleSheet.create({

  header: {
    // backgroundColor: 'grey',
    height: '20%',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 40

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

  });
