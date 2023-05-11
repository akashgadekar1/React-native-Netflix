import {Dimensions} from 'react-native';

export const apiUrl = 'https://api.themoviedb.org/3/';
export const LandScapeImageBaseURL = 'https://image.tmdb.org/t/p/w500';
export const PortraitImageBaseURL = 'https://image.tmdb.org/t/p/original';
export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;
export const ColorTypes = {
  black: '#000000',
  white: '#ffffff',
};

export const fontTypes = {
  bold: 'CircularStd-Bold',
  medium: 'CircularStd-Medium',
  extraBold: 'CircularStd-Black',
};
