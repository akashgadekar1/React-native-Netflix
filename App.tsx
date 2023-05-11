import React from 'react';
import MovieDetailsPage from './src/Component/MovieDetailsPage';
import {
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';

import ComponentsProps from './Compoents/Components';
import InputGetTextBox from './Compoents/InputGetTextBox';
import ListfaltCompoent from './Compoents/ListfaltCompoent';
import CompoentMap from './Compoents/CompoentMap';
import CompoentSectionList from './Compoents/CompoentSectionList';
import CompoentHideAndShow from './Compoents/CompoentHideAndShow';
import ResponsiveUi from './Compoents/ResponsiveUi';
import CompoentTouchbelHigjlight from './Compoents/CompoentTouchbelHigjlight';
import CompoentLoader from './Compoents/CompoentLoader';
import CompoentModel from './Compoents/CompoentModel';
import NavtgationCompoents from './Compoents/NavtgationCompoents';
import TabNavigationCompoent from './Compoents/TabNavigationCompoent';
import ApiCompoent from './Compoents/ApiCompoent';
import CompoentJson from './Compoents/CompoentJson';
import {store} from './Redux/store';
import {Provider} from 'react-redux';
import {ColorTypes} from './config/Config';
import TrendingCard from './src/CardsCompoents/TrendingCard';

import TrendingWeekCard from './src/CardsCompoents/TrendingWeekCard';
import Home from './src/CardCompoent/Home';
import Details from './src/screens/Details';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: ColorTypes.black}}>
      <StatusBar translucent backgroundColor="transparent" />
      <Provider store={store}>
        <ScrollView>
          {/* <Home /> */}
          {/* <TrendingCard />
          <TrendingWeekCard /> */}
          <Details />
        </ScrollView>
      </Provider>
    </View>
  );
};

export default App;
