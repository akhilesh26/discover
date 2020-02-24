import movieGenreData from '../constants/movieGenre.json';
import tvGenreData from '../constants/tvGenre.json';

export const getGenreName = (genreId, type) => {
  if (type === 'movie') {
    const nameObj = movieGenreData.genres.find(item => item.id === genreId);
    return (nameObj || {}).name || '';
  } 
  const nameObj = tvGenreData.genres.find(item => item.id === genreId);
  return (nameObj || {}).name || '';
}