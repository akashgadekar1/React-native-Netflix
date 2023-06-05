import {View, Text, ScrollView, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {GetCrimeMovie} from '../../Redux/CrimeMovie/action';
import {PortraitImageBaseURL, fontTypes} from '../../config/Config';
import {MainCard} from '../CardCompoent/MainCard';

export type MovieResponse = {
  id: string;
  url: string;
  backdrop_path: string;
  poster_path: string;
};

export default function CrimeMovie() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const crimeMovie = useSelector(state => state.crime.respdata);

  useEffect(() => {
    dispatch(GetCrimeMovie());
  }, []);

  const navigate = (id: string) => {
    navigation.navigate('DetailScreen', {id: id});
  };
  return (
    <View>
      {crimeMovie && crimeMovie.length > 0 && (
        <Text
          style={{
            color: 'white',
            marginTop: 20,
            marginLeft: 10,
            fontFamily: fontTypes.medium,
            fontSize: 20,
          }}>
          Crime Movie
        </Text>
      )}
      <ScrollView horizontal>
        {crimeMovie &&
          crimeMovie.length > 0 &&
          crimeMovie.map((item: MovieResponse, index: number) => {
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
