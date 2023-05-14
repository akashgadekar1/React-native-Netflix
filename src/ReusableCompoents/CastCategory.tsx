import {View, Text, ImageBackground, ScrollView} from 'react-native';
import React from 'react';
import {PortraitImageBaseURL, fontTypes} from '../../config/Config';
import Animated, {
  FadeIn,
  FadeInRight,
  FadeInUp,
  FadeOutUp,
} from 'react-native-reanimated';
import FastImage from 'react-native-fast-image';

export type MovieCastPageProps = {
  url: string;
  actorName: string;
};

const CastCategory: React.FC<MovieCastPageProps> = ({url, actorName}) => {
  return (
    <>
      <Animated.View entering={FadeInUp}>
        <FastImage
          source={{
            uri: url,
          }}
          resizeMode="cover"
          style={{
            height: 140,
            width: 120,
            borderRadius: 2,
          }}>
          <View
            style={{
              height: 20,
              width: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              position: 'absolute',
              bottom: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: fontTypes.medium,
                color: 'white',
                fontSize: 10,
              }}>
              {actorName}
            </Text>
          </View>
        </FastImage>
      </Animated.View>
    </>
  );
};
export default CastCategory;
