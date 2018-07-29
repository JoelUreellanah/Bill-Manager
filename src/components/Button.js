import React, { Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Button = ({onPress, children}) => {


    return(
      <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.buttonText}>{children}</Text>
      </TouchableOpacity>
    );
};

export default Button;


const styles = StyleSheet.create({

  container: {
    height: 50,
    width: "70%",
    // backgroundColor: "#01A6FB",
    backgroundColor: "#0260FE",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginBottom: 25
  },

  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15
  }

});
