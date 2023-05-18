import {
  View,
  StyleSheet,
  TextInput,
  StatusBar,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useEffect} from 'react';
import {LandScapeImageBaseURL, fontTypes} from '../../config/Config';
import Icon from 'react-native-vector-icons/AntDesign';
import Voice from 'react-native-vector-icons/MaterialIcons';

import {useDispatch, useSelector} from 'react-redux';
import {GetSearchMovie} from '../../Redux/SearchMovie/action';
import SearchMovie from './SearchMovie';
import {useNavigation} from '@react-navigation/native';

export type MovieResponse = {
  id: string;
  title: string;
  url: string;
  backdrop_path: string;
  poster_path: string;
  release_date: string;
  vote_average: string;
};

export default function SearchCard() {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const searchmovie = useSelector(state => state.Search.respdata);

  const handleChange = (input: string) => {
    if (input && input.length > 0) {
      dispatch(GetSearchMovie(input));
    }
  };

  return (
    <>
      <View style={{marginLeft: 10, marginTop: 21}}>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Icon name="arrowleft" size={20} color="white" />
        </Pressable>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View
            style={{
              width: '10%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="search1" size={25} color="white" />
          </View>
          <TextInput
            placeholder="Search for a show ,movie,geners..."
            style={styles.input}
            placeholderTextColor={'white'}
            onChangeText={handleChange}
          />
          <View
            style={{
              width: '10%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Voice name="keyboard-voice" size={25} color="white" />
          </View>
        </View>
      </View>
      <ScrollView>
        {searchmovie &&
          searchmovie.length > 0 &&
          searchmovie.map((item: MovieResponse, index: number) => {
            return (
              <SearchMovie
                id={item.id}
                key={index}
                title={item.title}
                release_date={item.release_date}
                vote_average={item.vote_average}
                url={LandScapeImageBaseURL + item.poster_path}
              />
            );
          })}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    marginTop: 10,
  },
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    width: '95%',
    borderColor: 'white',
    borderRadius: 3,
  },
  input: {
    borderRadius: 10,
    width: '80%',
    color: 'white',
    justifyContent: 'center',
    fontFamily: fontTypes.medium,
    alignItems: 'center',
    fontSize: 15,
  },
});
