import axios from 'axios';

const API_BASE = 'https://api.themoviedb.org/3/search/';
const api_key = '3a94078fb34b772a31d9a1348035bed7';

export const search = async(query, type) => {
  const res = await axios.get(`${API_BASE}${type}`, {
    params: {
      api_key,
      language: 'en-US',
      query,
    }
  })
  return res;
}