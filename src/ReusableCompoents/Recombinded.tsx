import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import Animated, {FadeInUp} from 'react-native-reanimated';
import {LandScapeImageBaseURL, PortraitImageBaseURL} from '../../config/Config';
export type RecombinedMoviePage = {
  url: string;
};

const Recombinded: React.FC<RecombinedMoviePage> = ({url}) => {
  return (
    <Animated.View entering={FadeInUp}>
      <ImageBackground
        source={{
          uri: url,
        }}
        resizeMode="contain"
        imageStyle={{borderRadius: 8}}
        style={{
          height: 120,
          width: 130,
          backgroundColor: 'white',
        }}></ImageBackground>
    </Animated.View>
  );
};
export default Recombinded;
