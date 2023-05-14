import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, {FlipInXUp} from 'react-native-reanimated';
import {height, width} from '../../config/Config';

export type MainCardPageProps = {
  url: string;
};
export const MainCard: React.FC<MainCardPageProps> = ({url}) => {
  return (
    <>
      <Animated.View entering={FlipInXUp} style={styles.container}>
        <ScrollView horizontal>
          <FastImage
            source={{
              uri: url,
              priority: FastImage.priority.high,
            }}
            resizeMode="cover"
            style={styles.imageView}></FastImage>
        </ScrollView>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  imageView: {
    height: height / 4,
    width: width / 3,
    marginRight: 10,
    borderRadius: 8,
  },
});
