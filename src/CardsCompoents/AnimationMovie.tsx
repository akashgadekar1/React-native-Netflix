import {View, Text, ScrollView, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {MainCard} from '../CardCompoent/MainCard';
import {PortraitImageBaseURL, fontTypes} from '../../config/Config';
import {GetAnimationMovie} from '../../Redux/AnnimationMovie/action';

export type MovieResponse = {
  id: string;
  url: string;
  backdrop_path: string;
  poster_path: string;
};

export default function AnimationMovie() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const animationMovie = useSelector(state => state.Animation.respdata);

  useEffect(() => {
    dispatch(GetAnimationMovie());
  }, []);

  const navigate = (id: string) => {
    navigation.navigate('DetailScreen', {id: id});
  };
  return (
    <View>
      <Text
        style={{
          color: 'white',
          marginTop: 20,
          marginLeft: 10,
          fontFamily: fontTypes.medium,
          fontSize: 20,
        }}>
        Animation Movie
      </Text>
      <ScrollView horizontal>
        {animationMovie &&
          animationMovie.length > 0 &&
          animationMovie.map((item: MovieResponse, index: number) => {
            return (
              <Pressable key={index} onPress={() => navigate(item.id)}>
                <MainCard
                  key={index}
                  url={PortraitImageBaseURL + item.poster_path}
                />
              </Pressable>
            );
          })}
      </ScrollView>
    </View>
  );
}
