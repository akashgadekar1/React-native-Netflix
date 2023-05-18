import {combineReducers} from 'redux';
import {TrendingdayReducer} from './TrendingDay/reducer';
import {TrendingWeekReducer} from './TrendingWeek/reducer';
import {RecommendReducer} from './RecombdedMovie/reducer';
import {DetailsReducer} from './Details/reducer';
import {CastReducer} from './CastCredit/reducer';
import {ActionReducer} from './ActionMovie/reducer';
import {AnimationReducer} from './AnnimationMovie/reducer';
import {ComedyReducer} from './ComedyMovie/reducer';
import {CrimeReducer} from './CrimeMovie/reducer';
import {MusicReducer} from './MusicMovie/reducer';
import {SearchReducer} from './SearchMovie/reducer';

export const appReducer = combineReducers({
  Trendingday: TrendingdayReducer,
  TrendingWeek: TrendingWeekReducer,
  Recommbeded: RecommendReducer,
  details: DetailsReducer,
  cast: CastReducer,
  ActionMovie: ActionReducer,
  Animation: AnimationReducer,
  Comedy: ComedyReducer,
  crime: CrimeReducer,
  Music: MusicReducer,
  Search: SearchReducer,
});
