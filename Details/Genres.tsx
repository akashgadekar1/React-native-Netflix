import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Animated, {FadeInDown, FadeInRight} from 'react-native-reanimated';
import {fontTypes} from '../config/Config';
import {GetPostDetails} from '../Redux/Details/action';

export default function Genres() {
  const route = useRoute();
  const dispatch = useDispatch();
  const detailsData = useSelector(state => state.details.respData);

  console.log(detailsData);

  useEffect(() => {
    const {id = String} = route.params;
    dispatch(GetPostDetails(id));
  }, []);

  return (
    <>
      <View
        style={{
          height: 25,
          borderRadius: 10,
          width: 70,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          flexDirection: 'row',
          marginLeft: 12,
          marginBottom: 12,
        }}>
        <Text
          style={{
            color: 'black',
            fontFamily: fontTypes.medium,
          }}>
          Genres
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        {detailsData.genres.map((item = String, index: number) => (
          <Animated.View
            entering={FadeInDown}
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
    </>
  );
}
