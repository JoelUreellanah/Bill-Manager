import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Container, Content, Header, Form, Input, Item, Button, Label} from 'native-base';

const UserInput = ({placeholder, value, onChangeText, secureTextEntry}) => {

  return(
      <Form style={styles.input}>
        <Item floatingLabel>
          <Label>{placeholder}</Label>
          <Input autoCorrect={false}
                 autoCapitalize="none"
                 secureTextEntry={secureTextEntry}
                 value={value}
                 onChangeText={onChangeText}/>
        </Item>
      </Form>

  );
};

export default UserInput;


const styles = StyleSheet.create({

  input: {
    width: '80%',
    marginBottom: 20
  }

  });
