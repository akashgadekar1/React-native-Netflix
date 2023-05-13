import {combineReducers} from 'redux';
import {TrendingdayReducer} from './TrendingDay/reducer';
import {TrendingWeekReducer} from './TrendingWeek/reducer';
import {RecommendReducer} from './RecombdedMovie/reducer';
import {DetailsReducer} from './Details/reducer';

export const appReducer = combineReducers({
  Trendingday: TrendingdayReducer,
  TrendingWeek: TrendingWeekReducer,
  Recommbeded: RecommendReducer,
  details: DetailsReducer,
});
