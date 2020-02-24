import React from 'react';

import {Container, Image, Title, Detail} from './styles';
const Card = (props) => {
  const {title, popularity, vote_average, poster_url, genre, release_year} = props || {};
  return (
    <Container>
      <Image src={poster_url}/>
      <Title class="title">{title}</Title>
      <Detail>{`${genre}, ${release_year}`}</Detail>
    </Container>
  )
}
export default Card;