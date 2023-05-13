import {View, Text, ScrollView, StatusBar} from 'react-native';
import React from 'react';
import Home from '../CardCompoent/Home';
import TrendingWeekCard from '../CardsCompoents/TrendingWeekCard';
import TrendingCard from '../CardsCompoents/TrendingCard';

export default function Homescreens() {
  return (
    <View style={{backgroundColor: 'black'}}>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView>
        <Home />
        <TrendingCard />
        <TrendingWeekCard />
      </ScrollView>
    </View>
  );
}
