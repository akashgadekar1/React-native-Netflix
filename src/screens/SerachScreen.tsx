import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import SearchCard from '../CardCompoent/SearchCard';

export default function SerachScreen() {
  return (
    <View
      style={{
        marginTop: StatusBar.currentHeight,
        flex: 1,
        backgroundColor: 'black',
      }}>
      <StatusBar backgroundColor={'black'} />

      <SearchCard />
    </View>
  );
}
