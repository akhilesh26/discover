import React, {useState, useEffect} from 'react';

import List from '../List';
import Header from '../Header';
import Sidebar from '../SideBar';

import {getMovies} from '../../api/getMovies';
import {search} from '../../api/search';

import {modifyData} from '../../utils/modifyData';

import {Wrapper, Container} from './styles';
const Main = () => {
  const [data, setData] = useState([]);
  const [params, setParams] = useState({});
  const [loading, setLoading] = useState(true);

  const [state, setState] = useState({
    type: {label: 'Movie', value: 'movie'},
    genre: null,
    startYear: {label: 2010, value: 2010},
    endYear: {label: 2020, value: 2020},
    rating: 8,
  })

  const [category, setCategory] = useState('popular');

  useEffect(() => {
    getMovies(state, category).then((res) => {
      console.log('getMovies', res);
      if (res.status === 200) {
        const apiData = modifyData((res.data || {}).results || [], state.type.value);
        setData(apiData)
        setLoading(false);
      }
      else {
        alert('api failed');
        setLoading(false);
      }
    });
  }, [state, category])

  const handleSearch = async (q) => {
    if (q) {
      const res = await search(q, state.type.value);
      if (res.status === 200) {
        const apiData = modifyData((res.data || {}).results || [], state.type.value);
        setData(apiData)
        setLoading(false);
      }
    }
    else {
      alert('Enter some query string');
    }
  }

  // TODO: proper use of loading varable to show loading state
  
  return(
    <Wrapper>
      <Container>
        <Header category={category} setCategory={setCategory} handleSearch={handleSearch}/>
        <List data={data} loading={loading} type={state.type.value}/>
        <Sidebar state={state} setState={setState} />
      </Container>
    </Wrapper>
  )
}

export default Main;