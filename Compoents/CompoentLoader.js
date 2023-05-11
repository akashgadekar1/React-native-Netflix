import {View, Text, StyleSheet, ActivityIndicator, Button} from 'react-native';
import React, {useState} from 'react';

export default function CompoentLoader() {
  const [show, setShow] = useState(false);
  const displayLoader = () => {
    setShow(true);
  };
  setTimeout(() => {
    setShow(false);
  }, 1000);
  return (
    <View style={styles.main}>
      <ActivityIndicator size={50} color={'red'} animating={show} />
      <Button title="Indictor show" onPress={displayLoader} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  demo: {
    fontSize: 30,
    height: 30,
  },
});
