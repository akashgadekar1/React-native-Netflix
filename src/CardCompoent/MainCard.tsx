import {View, Text, ImageBackground, ScrollView} from 'react-native';
import React from 'react';
import {height, width} from '../../config/Config';
import Animated, {FadeInRight, FlipInXUp} from 'react-native-reanimated';
import FastImage from 'react-native-fast-image';

export type MainCardPageProps = {
  url: string;
  // title: string;
  // release_date: string;
  // vote_average: string;
};
export const MainCard: React.FC<MainCardPageProps> = ({url}) => {
  return (
    <>
      <Animated.View entering={FlipInXUp} style={{marginTop: 20}}>
        <ScrollView horizontal>
          <FastImage
            source={{
              uri: url,
              priority: FastImage.priority.high,
            }}
            resizeMode="cover"
            // imageStyle={{borderRadius: 8}}
            style={{
              height: height / 4,
              width: width / 3,
              marginRight: 10,
              borderRadius: 8,
            }}></FastImage>
        </ScrollView>
      </Animated.View>
    </>
  );
};
