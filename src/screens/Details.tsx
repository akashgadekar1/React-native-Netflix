import {ActivityIndicator, ImageBackground, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  ColorTypes,
  PortraitImageBaseURL,
  fontTypes,
  height,
  width,
} from '../../config/Config';

import LinearGradient from 'react-native-linear-gradient';

import RecombidedMovie from '../CardCompoent/RecombidedMovie';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {GetPostDetails} from '../../Redux/Details/action';
import Animated, {
  FadeInLeft,
  FadeInRight,
  FadeOutRight,
} from 'react-native-reanimated';

export default function Details() {
  const route = useRoute();
  const dispatch = useDispatch();
  const detailsData = useSelector(state => state.details.respData);
  const loading = useSelector(state => state.details.loading);
  console.log(detailsData);

  useEffect(() => {
    const {id} = route.params;
    dispatch(GetPostDetails(id));
  }, []);

  const date = detailsData ? new Date(detailsData.release_date) : new Date();
  const formattedDate = date.getFullYear();

  return (
    <>
      {detailsData && (
        <View style={{backgroundColor: 'black', flex: 1}}>
          <View>
            <ImageBackground
              source={{
                uri: PortraitImageBaseURL + detailsData.poster_path,
              }}
              resizeMode="cover"
              imageStyle={{borderRadius: 8}}
              style={{
                height: height / 1.6,
                width: '100%',
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
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text
                  style={{
                    color: 'white',
                    justifyContent: 'center',
                    fontSize: 18,
                    fontFamily: fontTypes.medium,
                  }}>
                  {formattedDate}
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
                  {detailsData.vote_average}
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
            <View style={{flexDirection: 'row'}}>
              {detailsData.genres.map((item, index: number) => (
                <Animated.View
                  entering={FadeInRight}
                  // exiting={FadeOutRight}
                  style={{
                    height: 25,
                    marginLeft: 10,
                    paddingHorizontal: 5,
                    borderWidth: 1,
                    borderColor: 'gray',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'white', fontFamily: fontTypes.medium}}>
                    {item.name}
                  </Text>
                </Animated.View>
              ))}
            </View>
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
              {detailsData.overview}
            </Text>
          </View>
          <View style={{margin: 1}}>
            <RecombidedMovie />
          </View>
        </View>
      )}
    </>
  );
}
