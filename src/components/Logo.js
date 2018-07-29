import React, { Component} from 'react';
import { View, Text, StyleSheet} from 'react-native';

class Logo extends Component {

  render() {
    return(


        <View style={styles.container}>
          <Text style={styles.textLogo}>Expense</Text>
        </View>



    );
  }
}

export default Logo;


const styles = StyleSheet.create ({

  container: {
    // backgroundColor: '#E9E9EE',
    backgroundColor: 'white',
    height: 150,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center'
  },

  textLogo: {
    fontWeight: 'bold',
    fontSize: 24
  }
});
