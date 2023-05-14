import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {MovieResponse} from '../../CardsCompoents/TrendingCard';

import {useDispatch, useSelector} from 'react-redux';
import {GetMovieDetailsRecommend} from '../../../Redux/RecombdedMovie/action';
import {LandScapeImageBaseURL, fontTypes} from '../../../config/Config';

import Recombinded from '../../ReusableCompoents/Recombinded';
import {MainCard} from '../../CardCompoent/MainCard';

export type RecommendedMoviesTypes = {
  id: string;
};

const RecommendedMovies: React.FC<RecommendedMoviesTypes> = ({id}) => {
  const dispatch = useDispatch();

  const recommended = useSelector(state => state.Recommbeded.respdata);

  console.log({recommended});

  useEffect(() => {
    dispatch(GetMovieDetailsRecommend(id));
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      {recommended && recommended.length > 0 && (
        <Text
          style={{
            color: 'white',
            marginTop: 40,
            marginLeft: 10,
            fontFamily: fontTypes.medium,
            fontSize: 20,
          }}>
          Recommended Movie
        </Text>
      )}
      <ScrollView horizontal>
        {recommended &&
          recommended.length > 0 &&
          recommended.map((item, index: number) => {
            return (
              <MainCard
                key={index}
                url={LandScapeImageBaseURL + item.poster_path}
              />
            );
          })}
      </ScrollView>
    </View>
  );
};

export default RecommendedMovies;
