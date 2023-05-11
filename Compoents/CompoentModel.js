import {View, Text, StyleSheet, Button, Modal} from 'react-native';
import React, {useState} from 'react';

export default function CompoentModel() {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.main}>
      <Modal transparent={true} visible={show} animationType="slide">
        <View style={styles.centerView}>
          <View style={styles.modelView}>
            <Text>Hello code Stap by step</Text>
            <Button title="close Model" onPress={() => setShow(false)} />
          </View>
        </View>
      </Modal>
      <View style={styles.buttomView}>
        <Button title="open Model" onPress={() => setShow(true)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  buttomView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modelView: {
    padding: 20,
    backgroundColor: 'skyblue',
    borderRadius: 12,
    marginBottom: 12,
  },
});
