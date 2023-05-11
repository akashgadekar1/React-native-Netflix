import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';

function ComponentsProps() {
  const [name, setName] = useState('peter');
  const [age, setAge] = useState(12);
  return (
    <View>
      <Text style={{fontSize: 30, color: 'pink'}}>CompoentProps</Text>
      <Button title="Click me" onPress={() => setName('Akash Gadekar')} />
      <User name={name} age={23} />
    </View>
  );
}
const User = props => {
  // console.warn(props);
  return (
    <View style={{backgroundColor: 'green'}}>
      <Text style={{fontSize: 30}}>
        {props.name} {props.age}
      </Text>
    </View>
  );
};

export default ComponentsProps;
