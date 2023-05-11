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
              uri: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-MTIsIE1heSAyMDIz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00342635-fmqkrgggam-portrait.jpg',
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
