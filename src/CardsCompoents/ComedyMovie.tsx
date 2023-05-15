import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {GetComedyMovie} from '../../Redux/ComedyMovie/action';
import {View, Text, ScrollView, Pressable} from 'react-native';

import {PortraitImageBaseURL, fontTypes} from '../../config/Config';
import {MainCard} from '../CardCompoent/MainCard';

export type MovieResponse = {
  id: string;
  url: string;
  backdrop_path: string;
  poster_path: string;
};

export default function ComedyMovie() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const comedyMovie = useSelector(state => state.Comedy.respdata);

  useEffect(() => {
    dispatch(GetComedyMovie());
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
        Comedy Movie
      </Text>
      <ScrollView horizontal>
        {comedyMovie &&
          comedyMovie.length > 0 &&
          comedyMovie.map((item: MovieResponse, index: number) => {
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
