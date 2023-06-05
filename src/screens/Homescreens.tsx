import {View, Text, ScrollView, StatusBar} from 'react-native';
import React from 'react';
import Home from '../CardCompoent/Home';
import TrendingWeekCard from '../CardsCompoents/TrendingWeekCard';
import TrendingCard from '../CardsCompoents/TrendingCard';
import ActionMovie from '../CardsCompoents/ActionMovie';
import AnimationMovie from '../CardsCompoents/AnimationMovie';
import ComedyMovie from '../CardsCompoents/ComedyMovie';
import CrimeMovie from '../CardsCompoents/CrimeMovie';
import MusicMovie from '../CardsCompoents/MusicMovie';
export default function Homescreens() {
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView>
        <Home />
        <TrendingCard />
        <AnimationMovie />
        <TrendingWeekCard />
        <ActionMovie />
        <MusicMovie />

        <ComedyMovie />
      </ScrollView>
    </View>
  );
}
