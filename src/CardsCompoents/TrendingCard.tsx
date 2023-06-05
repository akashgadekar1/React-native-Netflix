import React, {useEffect, useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import {MainCard} from '../CardCompoent/MainCard';
import {GetMovieDetails} from '../../Redux/TrendingDay/action';
import {
  LandScapeImageBaseURL,
  PortraitImageBaseURL,
  fontTypes,
} from '../../config/Config';
import {useNavigation} from '@react-navigation/native';

export type MovieResponse = {
  id: string;
  url: string;
  backdrop_path: string;
  poster_path: string;
};
function Trendingday() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const MovieDay = useSelector(state => state.Trendingday.respdata);
  const isLoading = useSelector(state => state.Trendingday.loading);

  useEffect(() => {
    dispatch(GetMovieDetails());
  }, []);

  const navigate = (id: string) => {
    navigation.navigate('DetailScreen', {id: id});
  };

  return (
    <View>
      {MovieDay && MovieDay.length > 0 && (
        <Text
          style={{
            color: 'white',
            marginTop: 20,
            marginLeft: 10,
            fontFamily: fontTypes.medium,
            fontSize: 20,
          }}>
          Trending Movie Day
        </Text>
      )}
      <ScrollView horizontal>
        {MovieDay &&
          MovieDay.length > 0 &&
          MovieDay.map((item: MovieResponse, index: number) => {
            return (
              <Pressable key={index} onPress={() => navigate(item.id)}>
                <MainCard
                  key={index}
                  url={LandScapeImageBaseURL + item.poster_path}
                  // release_date={item.release_date}
                  // vote_average={item.vote_average.toFixed(1)}
                />
              </Pressable>
            );
          })}
      </ScrollView>
    </View>
  );
}

export default Trendingday;
