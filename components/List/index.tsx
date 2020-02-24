import React from 'react';
import Card from '../Card';

import {Container} from './styles';

const list = [1,1,1,1,1,1,1,1,11,1,1,1,1,1,1];

const List = ({data, loading, type}) => {
  return (
    <Container>
      { 
        (data || []).map((item, i) => <Card key={item.key} {...item} type={type}/> ) 
      }
    </Container>
  )
}
export default List;