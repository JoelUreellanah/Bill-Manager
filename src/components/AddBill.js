import React, { Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';

const Button = ({onPress, children}) => {


    return(
      <TouchableOpacity onPress={onPress} style={styles.container}>

        <View style={styles.buttonTextContainer}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>

        <View style={styles.iconContainer}>
          <Icon
            name='arrow-right'
            type='font-awesome'
            color='white'
            size={20}/>
        </View>

      </TouchableOpacity>
    );
};

export default Button;


const styles = StyleSheet.create({

  container: {
    height: 55,
    width: "90%",
    backgroundColor: "#0061D5",
    alignItems: 'flex-start',
    borderRadius: 3,
    marginBottom: 25,
    flexDirection: 'row'
  },

  buttonTextContainer: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },

  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
    paddingLeft: 10
  },

  iconContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
    height: '100%',
    paddingRight: 15
  },

});
