import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import {MainCard} from '../CardCompoent/MainCard';
import {GetMovieDetails} from '../../Redux/TrendingDay/action';
import {LandScapeImageBaseURL, fontTypes} from '../../config/Config';

export type MovieResponse = {
  url: string;
  backdrop_path: string;
};
function Trendingday() {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const MovieDay = useSelector(state => state.Trendingday.respdata);

  useEffect(() => {
    dispatch(GetMovieDetails());
  }, []);
  return (
    <View>
      <Text
        style={{
          color: 'white',
          marginTop: 40,
          marginLeft: 10,
          fontFamily: fontTypes.medium,
          fontSize: 20,
        }}>
        Trending Movie Day
      </Text>
      <ScrollView horizontal>
        {MovieDay &&
          MovieDay.length > 0 &&
          MovieDay.map((item: MovieResponse, index: number) => {
            return (
              <MainCard
                key={index}
                url={LandScapeImageBaseURL + item.backdrop_path}
                // release_date={item.release_date}
                // vote_average={item.vote_average.toFixed(1)}
              />
            );
          })}
      </ScrollView>
    </View>
  );
}

export default Trendingday;
