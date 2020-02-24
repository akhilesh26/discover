import React, {useState} from 'react';
import Select from 'react-select';
import StarRatings from 'react-star-ratings';

import movieGenreOptions from '../../constants/movieGenreOptions.json';
import yearOptions from '../../constants/yearOptions.json';

import {Container, Title, Label, Group, Box} from './styles';

const types = [
  {
    label: 'Movies',
    value: 'movie',
  },
  {
    label: 'TV Show',
    value: 'tv',
  }
];

const Sidebar = ({state, setState}) => {

  return (
    <Container>
      <Title>DISCOVER OPTIONS</Title>
      <Group>
        <Label>Type</Label>
        <Select 
          value={state.type}
          onChange={(val) => setState({...state, type: val})}
          options={types}
        />
      </Group>
      <Group>
        <Label>Genre</Label>
        <Select 
          value={state.genre}
          onChange={(val) => setState({...state, genre: val})}
          options={movieGenreOptions.genres}
        />
      </Group>
      <Group>
        <Label>Year</Label>
        <Box>
          <Select 
            value={state.startYear}
            onChange={(val) => setState({...state, startYear: val})}
            options={yearOptions.years}
          />
          <Select 
            value={state.endYear}
            onChange={(val) => setState({...state, endYear: val})}
            options={yearOptions.years}
          /> 
        </Box>
      </Group>
      <Group>
        <Label>Rating</Label>
        <StarRatings
          rating={state.rating}
          starRatedColor="yello"
          changeRating={(v1, v2) => setState({...state, rating: v1})}
          numberOfStars={10}
          starDimension="20px"
          starSpacing="4px"
          name='rating'
        />
      </Group>

    </Container>
  )
}
export default Sidebar;

