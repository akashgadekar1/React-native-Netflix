import {View, Text, SectionList} from 'react-native';
import React from 'react';

export default function CompoentSectionList() {
  const user = [
    {
      id: 1,
      name: 'anil gadekar  ',
      data: ['Akash ', 'gadekar', 'deepak'],
    },
    {
      id: 2,
      name: 'sanket',
      data: ['Akash ', 'gadekar', 'deepak'],
    },
    {
      id: 3,
      name: 'Vaibahv Hii',
      data: ['Akash ', 'gadekar', 'deepak'],
    },
    {
      id: 4,
      name: 'Kailas',
      data: ['Akash ', 'gadekar', 'deepak'],
    },
    {
      id: 1,
      name: 'anil',
      data: ['Akash ', 'gadekar', 'deepak'],
    },
  ];
  return (
    <View>
      <Text>CompoentSectionList</Text>
      <SectionList
        sections={user}
        renderItem={({item}) => (
          <Text style={{fontSize: 33, marginLeft: 20}}>{item}</Text>
        )}
        renderSectionHeader={({section: {name}}) => (
          <Text style={{fontSize: 40, color: 'red'}}>{name}</Text>
        )}
      />
    </View>
  );
}
