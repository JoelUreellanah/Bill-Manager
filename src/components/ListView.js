import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';


class List extends Component {
   alertItemName = (item) => {
      alert(item.option)
   }


   render() {

     const {options, onPress} = this.props;

      return (

         <ScrollView style = {styles.scrollViewContainer}>

            {
               options.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress={() => this.props.onSelect(item.option)}>

                     <Animatable.Text style = {styles.text}  animation="slideInLeft" duration={400} iterationCount={1}>
                        {item.option}
                     </Animatable.Text>
                  </TouchableOpacity>
               ))
            }

         </ScrollView>

      )
   }
}
export default List


const styles = StyleSheet.create ({

  scrollViewContainer: {
    // width: '50%',
    // height: '30%'
    // backgroundColor: 'grey'
  },

   container: {
      padding: 15,
      marginTop: 3,
      // alignItems: 'flex-start',
      // backgroundColor: 'blue',
   },
   text: {
      color: 'black',
      fontSize: 16,
      fontWeight: '600'
   }
})
