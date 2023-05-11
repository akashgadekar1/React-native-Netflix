import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ColorTypes, fontTypes, width} from '../../config/Config';

export type MovieDetailsPageProps = {
  url: string;
  title?: string;
  release_date?: string;
  vote_average?: string;
};

const MainCard2: React.FC<MovieDetailsPageProps> = ({
  url,
  release_date,
  vote_average,
}) => {
  return (
    <View style={{backgroundColor: ColorTypes.black, flex: 1}}>
      <ImageBackground
        source={{
          uri: url,
        }}
        resizeMode="contain"
        imageStyle={{borderRadius: 8}}
        style={{
          height: 200,
          width: width - 60,
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
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
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 30,
              fontStyle: 'italic',
              fontWeight: 'bold',
              marginLeft: 20,
              opacity: 120,
            }}></Text>
          <Text
            style={{
              color: 'white',
              marginBottom: 4,
              fontSize: 12,
              fontFamily: fontTypes.medium,
              marginLeft: 5,
            }}>
            {release_date}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: width - 60,
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqmQwG1KBK2K_GY2B2R9omGZZz3-OlO36NE27Czyqibcfmxakr7dskQQxe3JkJlKuMZFc&usqp=CAU',
                }}
                style={{
                  height: 20,
                  width: 50,
                  marginBottom: 2,
                  marginLeft: 5,
                }}
              />
              <Text
                style={{
                  color: ColorTypes.white,
                  marginLeft: 12,
                  fontFamily: fontTypes.medium,
                }}>
                {vote_average} Rating
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  height: 30,
                  borderRadius: 20,
                  width: 90,
                  justifyContent: 'center',
                  alignItems: 'center',

                  marginRight: 20,

                  backgroundColor: 'rgb(100, 1, 20)',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 13,
                    textAlign: 'center',
                    fontFamily: fontTypes.medium,
                  }}>
                  Watch Now
                </Text>
              </View>

              <View
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 30,

                  marginRight: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgb(100, 1, 20)',
                }}>
                <Text style={{fontSize: 18, color: ColorTypes.white}}>+</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default MainCard2;
