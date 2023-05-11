import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import React from 'react';

export default function CompoentTouchbelHigjlight() {
  return (
    <View style={styles.main}>
      <TouchableHighlight>
        <Text style={styles.button}>Success</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={styles.success}>Danger</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  button: {
    backgroundColor: 'green',
    color: 'white',
    textAlign: 'center',
    padding: 12,
    margin: 12,
    borderRadius: 10,
    fontSize: 25,
    shadowColor: 'black',
    elevation: 70,
    shadowOpacity: 1,
  },
  success: {
    backgroundColor: 'red',
    color: 'white',
    textAlign: 'center',
    padding: 12,
    margin: 12,
    borderRadius: 10,
    fontSize: 25,
    shadowColor: 'black',
    elevation: 70,
    shadowOpacity: 1,
  },
});
