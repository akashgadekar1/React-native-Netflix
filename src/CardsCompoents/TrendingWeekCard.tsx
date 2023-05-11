import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import {fontTypes, PortraitImageBaseURL} from '../../config/Config';
import {GetMovieWeek} from '../../Redux/TrendingWeek/action';

import MainCard2 from '../CardCompoent/MainCard2';

function TrendingWeekCard() {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const MovieDay = useSelector(state => state.TrendingWeek.respdata);

  useEffect(() => {
    dispatch(GetMovieWeek());
  }, []);
  return (
    <View>
      <Text
        style={{
          color: 'white',
          margin: 10,
          fontFamily: fontTypes.medium,
          fontSize: 20,
        }}>
        Trending Movie Week
      </Text>
      <ScrollView horizontal>
        {MovieDay &&
          MovieDay.length > 0 &&
          MovieDay.map((item, index: number) => {
            return (
              <MainCard2
                key={index}
                url={PortraitImageBaseURL + item.backdrop_path}
                release_date={item.release_date}
                vote_average={item.vote_average.toFixed(1)}
              />
            );
          })}
      </ScrollView>
    </View>
  );
}

export default TrendingWeekCard;
