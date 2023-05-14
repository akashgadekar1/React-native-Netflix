import React from 'react';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, {FadeInUp} from 'react-native-reanimated';
import {fontTypes} from '../../config/Config';

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
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              position: 'absolute',
              bottom: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: fontTypes.medium,
                color: 'white',
                fontSize: 9,
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
