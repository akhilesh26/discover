
const IMG_BASE_PATH = 'https://image.tmdb.org/t/p/w300';
import {getGenreName} from './getGenreName';
export const modifyData = (data, type) => {

  

  const modifiedData = (data || []).map((dataItem) => {
    if (type === 'movie') {
      const { id = '', title = '', popularity= '', poster_path= '', vote_average='', genre_ids=[], release_date} = dataItem || {};
      const d = new Date(release_date);
      return{
        key: id,
        title,
        popularity,
        vote_average,
        poster_url: `${IMG_BASE_PATH}${poster_path}`,
        genre: getGenreName(genre_ids[0] , type),
        release_year: d.getFullYear(),
      }
    }
    else {
      const { id = '', original_name, name, popularity= '', poster_path= '', vote_average='', genre_ids=[], first_air_date} = dataItem || {};
      const d = new Date(first_air_date);
      return{
        key: id,
        title: original_name || name,
        popularity,
        vote_average,
        poster_url: `${IMG_BASE_PATH}${poster_path}`,
        genre: getGenreName(genre_ids[0], type),
        release_year: d.getFullYear(),
      }
    }
  })
  return modifiedData;
}