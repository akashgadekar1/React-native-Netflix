import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import MovieDetailsPage from '../src/Component/MovieDetailsPage';
import {LandScapeImageBaseURL} from '../config/Config';

import {useDispatch, useSelector} from 'react-redux';
import {GetMovieDetails} from '../Redux/TrendingDay/action';

export default function CompoentJson() {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const MovieDay = useSelector(state => state.Movie.respdata);

  useEffect(() => {
    dispatch(GetMovieDetails());
  }, []);

  return (
    <View>
      <Text
        style={{fontSize: 20, color: 'white', marginLeft: 20, marginTop: 10}}>
        Trending Movies
      </Text>
      <View>
        <ScrollView horizontal>
          {MovieDay &&
            MovieDay.length > 0 &&
            MovieDay.map((item, index) => {
              return (
                <MovieDetailsPage
                  key={index}
                  url={LandScapeImageBaseURL + item.backdrop_path}
                  release_date={item.release_date}
                  vote_average={item.vote_average.toFixed(1)}
                />
              );
            })}
        </ScrollView>
      </View>
    </View>
  );
}
