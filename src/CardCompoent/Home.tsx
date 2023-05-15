import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import {ColorTypes, fontTypes, height, width} from '../../config/Config';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Home() {
  return (
    <>
      <ImageBackground
        source={{
          uri: 'https://myhotposters.com/cdn/shop/products/mL6443_1024x1024.jpg?v=1671141570',
        }}
        resizeMode="contain"
        imageStyle={{borderRadius: 8}}
        style={styles.ImageView}>
        <LinearGradient
          colors={['transparent', ColorTypes.black]}
          style={styles.LinearGradientView}>
          <View style={styles.ButtonViewContainer}>
            <View>
              <Text style={styles.iconText}>
                <Icon name="plus" size={15} />
              </Text>
              <Text style={styles.text}>My List</Text>
            </View>
            <View style={styles.TextIconButton}>
              <Text
                style={{
                  color: 'black',
                  textAlign: 'center',
                  fontFamily: fontTypes.medium,
                }}>
                <Icon name="play" size={15} /> Watch Now
              </Text>
            </View>

            <View style={{marginTop: 10}}>
              <Text style={styles.iconText}>
                <Icon name="infocirlceo" size={15} />
              </Text>
              <Text style={styles.text}>My List</Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  ImageView: {
    height: height / 1.6,
    width: width / 1,
    marginRight: 10,
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
  ButtonViewContainer: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: width - 20,
  },
  iconText: {
    color: 'white',
    justifyContent: 'center',
    marginLeft: 10,
    fontSize: 20,
    margin: 3,
  },
  TextIconButton: {
    height: 30,
    borderRadius: 10,
    width: 110,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontSize: 10,
    fontFamily: fontTypes.medium,
    marginTop: 2,
  },
});
