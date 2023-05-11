import {View, Text, ImageBackground} from 'react-native';

import React from 'react';
import {ColorTypes, height, width} from '../../config/Config';
import LinearGradient from 'react-native-linear-gradient';
import CommButton from '../CommonCompoent/CommButton';

export default function Home() {
  return (
    <ImageBackground
      source={{
        uri: 'https://watertower-music.com/images/covers/The%20Sandman_S1_Choral.jpg',
      }}
      resizeMode="contain"
      imageStyle={{borderRadius: 8}}
      style={{
        height: height / 1.6,
        width: width / 1,
        marginRight: 10,
      }}>
      <LinearGradient
        colors={['transparent', ColorTypes.black]}
        style={{
          height: 100,
          width: '100%',
          bottom: 0,
          position: 'absolute',
          paddingLeft: 15,
          paddingRight: 15,
          borderRadius: 5,
        }}>
        <View>
          <CommButton />
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}
