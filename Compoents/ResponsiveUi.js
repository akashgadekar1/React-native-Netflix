import {View, Text} from 'react-native';
import React from 'react';

export default function ResponsiveUi() {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{backgroundColor: 'red', flex: 1, flexDirection: 'row'}}>
        <View style={{backgroundColor: 'skyblue', flex: 1}}></View>
        <View style={{backgroundColor: 'blue', flex: 1}}></View>
        <View style={{backgroundColor: 'green', flex: 1}}></View>
      </View>
      <View style={{backgroundColor: 'yellow', flex: 1}}></View>
      <View style={{backgroundColor: 'pink', flex: 1}}></View>
    </View>
  );
}
