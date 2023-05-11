import {HTTPInstance} from '../Utils/https-instance';

const apiKey = '?api_key=2321281208f9b141fc735aa7047d4892';

export const doGetTrendingWeekApi = async () => {
  return await HTTPInstance.get('trending/movie/week' + apiKey);
};
