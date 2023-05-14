import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ColorTypes, fontTypes, width} from '../../config/Config';
import FastImage from 'react-native-fast-image';

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
    <View style={styles.Container}>
      <FastImage
        source={{
          uri: url,
        }}
        resizeMode="contain"
        style={styles.Fastimage}>
        <LinearGradient
          colors={['transparent', ColorTypes.black]}
          style={styles.LinearGradientView}>
          <View style={{marginTop: 28}}>
            <Text style={styles.date}>{release_date}</Text>
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
            </View>
          </View>
        </LinearGradient>
      </FastImage>
    </View>
  );
};

export default MainCard2;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: ColorTypes.black,
    flex: 1,
  },
  Fastimage: {
    height: 200,
    width: width - 60,
    marginTop: 10,
    marginLeft: 12,
    marginRight: 10,
    borderRadius: 10,
  },
  LinearGradientView: {
    height: 100,
    width: '100%',
    bottom: 0,
    position: 'absolute',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  date: {
    color: 'white',
    marginBottom: 4,
    fontSize: 12,
    fontFamily: fontTypes.medium,
    marginLeft: 5,
  },
});
