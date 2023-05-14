import {View, Text, ImageBackground} from 'react-native';

import React from 'react';
import {ColorTypes, fontTypes, height, width} from '../../config/Config';
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/AntDesign';

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
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            justifyContent: 'space-around',
            flexDirection: 'row',
            width: width - 20,
          }}>
          <View>
            <Text
              style={{
                color: 'white',
                justifyContent: 'center',
                marginLeft: 10,
                fontSize: 20,
                margin: 3,
              }}>
              <Icon name="plus" size={15} />
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 10,
                fontFamily: fontTypes.medium,
              }}>
              My List
            </Text>
          </View>
          <View
            style={{
              height: 30,
              borderRadius: 10,
              width: 110,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
              backgroundColor: 'white',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: 'black',

                textAlign: 'center',
                fontFamily: fontTypes.medium,
              }}>
              <Icon name="play" size={15} /> Watch Now
            </Text>
          </View>

          <View style={{marginTop: 10}}>
            <Text
              style={{
                color: 'white',
                justifyContent: 'center',
                marginLeft: 10,
                fontSize: 20,
              }}>
              <Icon name="infocirlceo" size={15} />
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 10,
                fontFamily: fontTypes.medium,
                marginTop: 2,
              }}>
              My List
            </Text>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}
