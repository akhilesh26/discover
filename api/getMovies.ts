import axios from 'axios';

const API_BASE = 'https://api.themoviedb.org/3/discover/';
const api_key = '3a94078fb34b772a31d9a1348035bed7';

const getSortBy = (category) => {
  switch(category) {
    case 'popular':
      return 'popularity.desc';
    case 'latest': 
      return 'release_date.desc';
    case 'top_rated': 
      return 'vote_average.desc';
    case 'trending':
      return 'vote_count.desc';
  }
}

export const getMovies = async(params, category) => {
  console.log('params', params);
  const {type, genre, startYear, endYear, rating } = params || {};
  const res = await axios.get(`${API_BASE}${type.value}`, {
    params: {
      api_key,
      language: 'en-US',
      sort_by: getSortBy(category),
      'vote_average.gte': rating,
      'primary_release_date.gte': `${startYear.value}-01-01`,
      'primary_release_date.lte': `${endYear.value}-01-01`,
    }
  })
  return res;
}