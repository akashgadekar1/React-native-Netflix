import React, {useEffect} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fontTypes, PortraitImageBaseURL} from '../../config/Config';
import {GetMovieWeek} from '../../Redux/TrendingWeek/action';
import MainCard2 from '../CardCompoent/MainCard2';
import {GetMovieDetails} from '../../Redux/TrendingDay/action';
import {useNavigation} from '@react-navigation/native';

function TrendingWeekCard() {
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
            margin: 10,
            fontFamily: fontTypes.medium,
            fontSize: 20,
          }}>
          Trending Movie Week
        </Text>
      )}
      <ScrollView horizontal>
        {MovieDay &&
          MovieDay.length > 0 &&
          MovieDay.map((item, index: number) => {
            return (
              <Pressable key={index} onPress={() => navigate(item.id)}>
                <MainCard2
                  key={index}
                  url={PortraitImageBaseURL + item.backdrop_path}
                  release_date={item.release_date}
                  vote_average={item.vote_average.toFixed(1)}
                />
              </Pressable>
            );
          })}
      </ScrollView>
    </View>
  );
}

export default TrendingWeekCard;
