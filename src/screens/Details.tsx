import {
  ActivityIndicator,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {
  ColorTypes,
  PortraitImageBaseURL,
  fontTypes,
  height,
  width,
} from '../../config/Config';

import LinearGradient from 'react-native-linear-gradient';

import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {GetPostDetails} from '../../Redux/Details/action';
import Genres from '../../Details/Genres';
import ActorCast from '../../Details/ActorCast';
import Icon from 'react-native-vector-icons/AntDesign';
import Home from '../CardCompoent/Home';
import RecombidedMovie from '../components/details/RecommendedMovies';
import Recombinded from '../ReusableCompoents/Recombinded';
import RecommendedMovies from '../components/details/RecommendedMovies';
import FastImage from 'react-native-fast-image';

export default function Details() {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const {id} = route.params;
  const detailsData = useSelector(state => state.details.respData);

  console.log({id});

  useEffect(() => {
    dispatch(GetPostDetails(id));
  }, []);

  const date = detailsData ? new Date(detailsData.release_date) : new Date();
  const formattedDate = date.getFullYear();

  return (
    // <View style={{backgroundColor: 'black', flex: 1}}>
    <ScrollView>
      {detailsData && (
        <View style={style.container}>
          <View>
            <FastImage
              source={{
                uri: PortraitImageBaseURL + detailsData.poster_path,
                priority: FastImage.priority.high,
              }}
              resizeMode="cover"
              style={style.fastImage}>
              <LinearGradient
                colors={['transparent', ColorTypes.black]}
                style={style.linearGradient}></LinearGradient>

              {/* HomeScrren Move Button */}

              <Pressable
                onPress={() => navigation.navigate(Home)}
                style={style.MoveHomeScreen}>
                <Icon name="left" size={18} color="white" />
              </Pressable>

              {/* HomeScrren Move Button End */}
            </FastImage>

            {/* Year View IMDB,Time */}
            <View style={style.bottomMainContainers}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={style.TopText}>{formattedDate}</Text>
                <Text style={style.bottomtest}>Year</Text>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={style.TopText}>
                  {detailsData.vote_average.toFixed(1)}
                </Text>
                <Text style={style.bottomtest}>IMDB</Text>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={style.TopText}>2h 35m</Text>
                <Text style={style.bottomtest}>Time</Text>
              </View>
            </View>
            {/* Year View end*/}
          </View>

          {/* Geners Code Start */}

          <View style={{marginTop: 12}}>
            <Genres />
          </View>

          {/* Geners Code Start End */}

          {/* Story Code  */}
          <View style={style.storyView}>
            <Text
              style={{
                color: 'black',
                fontFamily: fontTypes.medium,
              }}>
              Story
            </Text>
          </View>
          {/* Story Code   End*/}

          <View style={{marginTop: 5}}>
            <Text style={style.storyText}>
              {detailsData.overview.slice(0, 300)}
            </Text>
          </View>
        </View>
      )}

      {/* Cast Components */}
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <ActorCast id={id} />
      </View>
      {/* Cast Components End */}

      {/* Recommended components */}
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <RecommendedMovies id={id} />
      </View>
      {/* Recommended components End */}
    </ScrollView>
    // </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  fastImage: {
    height: height / 1.6,
    width: '100%',
    marginRight: 10,
    borderRadius: 8,
  },
  linearGradient: {
    height: 100,
    width: '100%',
    bottom: 0,
    position: 'absolute',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  MoveHomeScreen: {
    borderRadius: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    marginTop: 50,
    width: 30,
    marginLeft: 12,
  },
  bottomMainContainers: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: width - 20,
    marginTop: 20,
  },
  TopText: {
    color: 'white',
    justifyContent: 'center',
    fontSize: 18,
    fontFamily: fontTypes.medium,
  },
  bottomtest: {
    color: 'white',
    justifyContent: 'center',
    fontSize: 14,
    fontFamily: fontTypes.medium,
  },
  storyView: {
    height: 25,
    borderRadius: 10,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    marginLeft: 12,
    marginTop: 15,
  },
  storyText: {
    color: 'white',
    fontFamily: fontTypes.extraBold,
    fontSize: 14,
    margin: 12,
    width: '90%',
    textAlign: 'justify',
    lineHeight: 20,
    textAlignVertical: 'center',
  },
});
