import {View, Text, ScrollView, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {GetMusicMovie} from '../../Redux/MusicMovie/action';
import {MainCard} from '../CardCompoent/MainCard';
import {PortraitImageBaseURL, fontTypes} from '../../config/Config';

export type MovieResponse = {
  id: string;
  url: string;
  backdrop_path: string;
  poster_path: string;
};

export default function CrimeMovie() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const MusicMovie = useSelector(state => state.Music.respdata);

  useEffect(() => {
    dispatch(GetMusicMovie());
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
        Music Movie
      </Text>
      <ScrollView horizontal>
        {MusicMovie &&
          MusicMovie.length > 0 &&
          MusicMovie.map((item: MovieResponse, index: number) => {
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
