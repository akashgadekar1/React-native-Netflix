import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';

export default function CompoentHideAndShow() {
  const [show, setShow] = useState();
  return (
    <View style={{backgroundColor: 'red', flex: 1}}>
      <Text style={{fontSize: 30}}>CompoentHideAndShow</Text>
      <Button
        title="on press"
        color={'yellow'}
        onPress={() => setShow(!show)}
      />
      {show == true ? <User /> : null}
    </View>
  );
}

const User = () => {
  return (
    <View>
      <Text style={{fontSize: 30, color: 'green'}}>User Compoent</Text>
    </View>
  );
};
