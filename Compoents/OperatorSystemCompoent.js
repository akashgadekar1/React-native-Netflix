import {View, Text, Platform} from 'react-native';
import React from 'react';

export default function OperatorSystemCompoent() {
  return (
    <View>
      <Text style={{fontSize: 20}}>platform:{Platform.OS}</Text>
      {Platform.OS == 'ios' ? (
        <View
          style={{backgroundColor: 'green', height: 100, width: 100}}></View>
      ) : (
        <View style={{backgroundColor: 'red', height: 100, width: 100}}></View>
      )}
    </View>
  );
}
