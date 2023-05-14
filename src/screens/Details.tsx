import {
  ActivityIndicator,
  ImageBackground,
  Pressable,
  ScrollView,
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
    <View style={{backgroundColor: 'black', flex: 1}}>
      <ScrollView>
        {detailsData && (
          <View style={{backgroundColor: 'black', flex: 1}}>
            <View>
              <FastImage
                source={{
                  uri: PortraitImageBaseURL + detailsData.poster_path,
                  priority: FastImage.priority.high,
                }}
                resizeMode="cover"
                style={{
                  height: height / 1.6,
                  width: '100%',
                  marginRight: 10,
                  borderRadius: 8,
                }}>
                <LinearGradient
                  colors={['transparent', ColorTypes.black]}
                  style={{
                    height: 100,
                    width: '100%',
                    bottom: 0,
                    position: 'absolute',
                    paddingLeft: 15,
                    paddingRight: 15,
                    borderRadius: 5,
                  }}></LinearGradient>

                {/* HomeScrren Move Button */}
                <Pressable
                  onPress={() => navigation.goBack()}
                  style={{
                    borderRadius: 30,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 30,
                    marginTop: 50,
                    width: 30,
                    marginLeft: 12,
                  }}>
                  <Icon name="left" size={18} color="white" />
                </Pressable>
                {/* HomeScrren Move Button */}
              </FastImage>

              {/* Year View */}
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  justifyContent: 'space-around',
                  flexDirection: 'row',
                  width: width - 20,
                  marginTop: 20,
                }}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{
                      color: 'white',
                      justifyContent: 'center',
                      fontSize: 18,
                      fontFamily: fontTypes.medium,
                    }}>
                    {formattedDate}
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      justifyContent: 'center',
                      fontSize: 14,
                      fontFamily: fontTypes.medium,
                    }}>
                    Year
                  </Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{
                      color: 'white',
                      justifyContent: 'center',
                      fontSize: 18,
                      fontFamily: fontTypes.medium,
                    }}>
                    {detailsData.vote_average.toFixed(1)}
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      justifyContent: 'center',
                      fontSize: 14,
                      fontFamily: fontTypes.medium,
                    }}>
                    IMDB
                  </Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{
                      color: 'white',

                      fontSize: 18,
                      fontFamily: fontTypes.medium,
                    }}>
                    2h 35m
                  </Text>
                  <Text
                    style={{
                      color: 'white',

                      fontSize: 14,
                      fontFamily: fontTypes.medium,
                    }}>
                    Time
                  </Text>
                </View>
              </View>
              {/* Year View end*/}
            </View>

            {/* Geners Code Start */}
            <View style={{marginTop: 14}}>
              <View
                style={{
                  height: 25,
                  borderRadius: 10,
                  width: 70,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  flexDirection: 'row',
                  marginLeft: 12,
                  marginTop: 12,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontFamily: fontTypes.medium,
                  }}>
                  Genres
                </Text>
                {/* </LinearGradient> */}
              </View>
              <View style={{marginTop: 12}}>
                <Genres />
              </View>
              <View
                style={{
                  height: 25,
                  borderRadius: 10,
                  width: 70,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  flexDirection: 'row',
                  marginLeft: 12,
                  marginTop: 15,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontFamily: fontTypes.medium,
                  }}>
                  Story
                </Text>
              </View>

              <View style={{marginTop: 5}}>
                <Text
                  style={{
                    color: 'white',
                    fontFamily: fontTypes.medium,
                    fontSize: 14,
                    margin: 12,
                    textAlign: 'justify',
                    lineHeight: 20,
                    textAlignVertical: 'center',
                  }}>
                  {detailsData.overview.slice(0, 300)}
                </Text>
              </View>
            </View>
            {/* Geners Code Start End */}
          </View>
        )}
        <View style={{flex: 1, backgroundColor: 'black'}}>
          <ActorCast id={id} />
        </View>
        <View style={{flex: 1, backgroundColor: 'black'}}>
          <RecommendedMovies id={id} />
        </View>
      </ScrollView>
    </View>
  );
}
