import {View, Text, FlatList, ScrollView} from 'react-native';
import React from 'react';

export default function CompoentMap() {
  const user = [
    {
      id: 1,
      name: 'anil gadekar I ',
    },
    {
      id: 2,
      name: 'sanket',
    },
    {
      id: 3,
      name: 'Vaibahv Hii',
    },
    {
      id: 4,
      name: 'Kailas',
    },
    {
      id: 1,
      name: 'anil',
    },
    {
      id: 1,
      name: 'anil',
    },
    {
      id: 2,
      name: 'sanket',
    },
    {
      id: 3,
      name: 'Vaibahv',
    },
    {
      id: 4,
      name: 'Kailas',
    },
    {
      id: 1,
      name: 'anil',
    },
    {
      id: 2,
      name: 'sanket',
    },
    {
      id: 3,
      name: 'Vaibahv',
    },
    {
      id: 4,
      name: 'Kailas',
    },
    {
      id: 3,
      name: 'Vaibahv',
    },
    {
      id: 4,
      name: 'Kailas',
    },
  ];
  return (
    <View>
      <Text style={{fontSize: 32}}>ListOf flat List</Text>

      <ScrollView>
        {user.map(item => (
          <Text style={{fontSize: 30, fontStyle: 'italic', padding: 12}}>
            {item.name}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}
