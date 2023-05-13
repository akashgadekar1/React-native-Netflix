import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {MovieResponse} from '../CardsCompoents/TrendingCard';

import {useDispatch, useSelector} from 'react-redux';
import {GetMovieDetailsRecommend} from '../../Redux/RecombdedMovie/action';
import {LandScapeImageBaseURL, fontTypes} from '../../config/Config';
import {MainCard} from './MainCard';

export default function RecombidedMovie() {
  const myViewRef = useRef(null);
  const dispatch = useDispatch();
  const recommended = useSelector(state => state.Recommbeded.respData);

  // useEffect(() => {
  //   // const id = searchParams.get('id');
  //   const id = myViewRef.get('id');
  //   console.log({id});
  //   dispatch(GetMovieDetailsRecommend(id));
  // }, []);
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
        recommended Movie
      </Text>
      <ScrollView horizontal>
        {recommended &&
          recommended.length > 0 &&
          recommended.map((item: MovieResponse, index: number) => {
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
