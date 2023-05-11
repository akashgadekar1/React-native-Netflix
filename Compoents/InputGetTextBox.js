import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';

export default function InputGetTextBox() {
  const [name, setName] = useState('');
  return (
    <View>
      <Text style={{fontSize: 30}}>InputGetTextBox</Text>
      <Text style={{fontSize: 30}}>Your Name is :{name}</Text>
      <TextInput
        placeholder="enter name"
        style={styles.textInput}
        secureTextEntry={true}
        value={name}
        onChangeText={text => setName(text)}
      />
      <Button title="click me" onPress={() => setName()} />
    </View>
  );
}
const styles = StyleSheet.create({
  textInput: {
    borderRadius: 2,
    borderWidth: 2,
    margin: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
