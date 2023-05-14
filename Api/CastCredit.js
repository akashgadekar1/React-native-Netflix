import {HTTPInstance} from '../Utils/https-instance';

const apiKey = '?api_key=2321281208f9b141fc735aa7047d4892';

export const doGetCastAPI = async id => {
  return await HTTPInstance.get('movie/' + id + '/credits' + apiKey);
};
