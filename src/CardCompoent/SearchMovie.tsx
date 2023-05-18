import {View, Text, ScrollView, Image, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import FastImage from 'react-native-fast-image';
import {fontTypes} from '../../config/Config';
import {useDispatch, useSelector} from 'react-redux';
import {GetSearchMovie} from '../../Redux/SearchMovie/action';
import {useNavigation} from '@react-navigation/native';

export type SearchCardPageProps = {
  id: string;
  url: string;
  title: string;
  release_date: string;
  vote_average: string;
};

const SearchMovie: React.FC<SearchCardPageProps> = ({
  id,
  url,
  title,
  release_date,
  vote_average,
}) => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('DetailScreen', {id: id});
  };
  return (
    <Pressable
      style={{marginTop: 15, marginLeft: 5}}
      onPress={handleNavigation}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <FastImage
          source={{
            uri: url,
            priority: FastImage.priority.high,
          }}
          resizeMode="cover"
          style={{
            height: 120,
            width: 100,
            marginBottom: 9,
            borderRadius: 5,
          }}></FastImage>
        <View style={{marginTop: 10, marginLeft: 10, width: '80%'}}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              marginLeft: 4,
              fontFamily: fontTypes.medium,
            }}>
            {title}
          </Text>
          <Text
            style={{
              color: 'gray',
              fontSize: 16,
              marginLeft: 4,
              marginTop: 5,
              fontFamily: fontTypes.medium,
            }}>
            {release_date}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{height: 15, width: 40, marginTop: 10}}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png',
              }}
            />
            <Text
              style={{
                color: 'gray',
                fontSize: 12,
                marginLeft: 4,
                marginTop: 9,
                fontFamily: fontTypes.medium,
              }}>
              {vote_average} Rating
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default SearchMovie;
