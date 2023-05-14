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
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homescreens from './src/screens/Homescreens';
import RecombidedMovie from './src/components/details/RecommendedMovies';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator
          screenOptions={{
            animation: 'slide_from_right',
          }}>
          <Stack.Screen
            name="Home"
            component={Homescreens}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="DetailScreen"
            component={Details}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
