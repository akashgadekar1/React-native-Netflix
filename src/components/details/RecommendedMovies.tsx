import React, {useEffect} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {GetMovieDetailsRecommend} from '../../../Redux/RecombdedMovie/action';
import {PortraitImageBaseURL, fontTypes} from '../../../config/Config';

import {useNavigation} from '@react-navigation/native';
import {MainCard} from '../../CardCompoent/MainCard';

export type RecommendedMoviesTypes = {
  id: string;
};

const RecommendedMovies: React.FC<RecommendedMoviesTypes> = ({id}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const recommended = useSelector(state => state.Recommbeded.respdata);

  useEffect(() => {
    dispatch(GetMovieDetailsRecommend(id));
  }, []);

  const navigate = (id: string) => {
    navigation.push('DetailScreen', {id: id});
  };

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
};

export default RecommendedMovies;
