import {View, Text, ImageBackground, ScrollView} from 'react-native';
import React from 'react';
import {height, width} from '../../config/Config';

export type MainCardPageProps = {
  url: string;
  // title: string;
  // release_date: string;
  // vote_average: string;
};
export const MainCard: React.FC<MainCardPageProps> = ({url}) => {
  return (
    <>
      <View style={{marginTop: 20}}>
        <ScrollView horizontal>
          <ImageBackground
            source={{
              uri: url,
            }}
            resizeMode="cover"
            imageStyle={{borderRadius: 8}}
            style={{
              height: height / 4,
              width: width / 3,
              marginRight: 10,
            }}></ImageBackground>
        </ScrollView>
      </View>
    </>
  );
};
