import {ImageBackground, Text, View} from 'react-native';
import React from 'react';
import {ColorTypes, fontTypes, height, width} from '../../config/Config';

import CommButton from '../CommonCompoent/CommButton';
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {MainCard} from '../CardCompoent/MainCard';

export default function Details() {
  return (
    <>
      <View>
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
            }}></LinearGradient>
        </ImageBackground>
        {/* Year View */}
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            justifyContent: 'space-around',
            flexDirection: 'row',
            width: width - 20,
            marginTop: 20,
          }}>
          <View style={{}}>
            <Text
              style={{
                color: 'white',
                justifyContent: 'center',
                fontSize: 18,
                fontFamily: fontTypes.medium,
              }}>
              2021
            </Text>
            <Text
              style={{
                color: 'white',
                justifyContent: 'center',
                fontSize: 14,
                fontFamily: fontTypes.medium,
              }}>
              Year
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: 'white',
                justifyContent: 'center',
                fontSize: 18,
                fontFamily: fontTypes.medium,
              }}>
              8.7
            </Text>
            <Text
              style={{
                color: 'white',
                justifyContent: 'center',
                fontSize: 14,
                fontFamily: fontTypes.medium,
              }}>
              IMDB
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: 'white',

                fontSize: 18,
                fontFamily: fontTypes.medium,
              }}>
              2h 35m
            </Text>
            <Text
              style={{
                color: 'white',

                fontSize: 14,
                fontFamily: fontTypes.medium,
              }}>
              Time
            </Text>
          </View>
        </View>
        {/* Year View end*/}
      </View>
      <View style={{marginTop: 14}}>
        <Text
          style={{
            color: 'white',
            fontFamily: fontTypes.medium,
            fontSize: 14,
            margin: 12,
            textAlign: 'justify',
            lineHeight: 20,
            textAlignVertical: 'center',
          }}>
          Transparent black color code is used in various industries such as
          fashion, advertising, and graphic design. This color is perfect for
          creating
        </Text>
      </View>
      <View style={{margin: 12}}>
        <Text style={{color: 'white'}}>Realted Movie</Text>
        <MainCard />
      </View>
    </>
  );
}
