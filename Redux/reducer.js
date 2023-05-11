import {combineReducers} from 'redux';
import {TrendingdayReducer} from './TrendingDay/reducer';
import {TrendingWeekReducer} from './TrendingWeek/reducer';

export const appReducer = combineReducers({
  Trendingday: TrendingdayReducer,
  TrendingWeek: TrendingWeekReducer,
});
