import {View, Text, ScrollView, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {GetActionMovie} from '../../Redux/ActionMovie/action';
import {MainCard} from '../CardCompoent/MainCard';
import {
  LandScapeImageBaseURL,
  PortraitImageBaseURL,
  fontTypes,
} from '../../config/Config';

export type MovieResponse = {
  id: string;
  url: string;
  backdrop_path: string;
  poster_path: string;
};

function ActionMovie() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const actionmovie = useSelector(state => state.ActionMovie.respdata);

  useEffect(() => {
    dispatch(GetActionMovie());
  }, []);

  const navigate = (id: string) => {
    navigation.navigate('DetailScreen', {id: id});
  };

  return (
    <View>
      {actionmovie && actionmovie.length > 0 && (
        <Text
          style={{
            color: 'white',
            marginTop: 20,
            marginLeft: 10,
            fontFamily: fontTypes.medium,
            fontSize: 20,
          }}>
          Action Movie
        </Text>
      )}
      <ScrollView horizontal>
        {actionmovie &&
          actionmovie.length > 0 && 
          actionmovie.map((item: MovieResponse, index: number) => {
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
export default ActionMovie;
