import React, {useState} from 'react';

import {Container, Title, MenuContainer, Item, SearchContainer, SearchInput, SearchButton} from './styles';

const menu = [
  {
    label: 'POPULAR',
    value: 'popular'
  },
  {
    label: 'TRENDING',
    value: 'trending'
  },
  {
    label: 'LATEST',
    value: 'latest'
  },
  {
    label: 'TOP RATED',
    value: 'top_rated'
  }
]

const Header = ({category, setCategory, handleSearch}) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <Container>
      <Title>Discover</Title>
      <MenuContainer>
        {
          menu.map((item) => <Item  key={item.value} onClick={() => setCategory(item.value)} isActive={category === item.value}>{item.label}</Item>)
        }
      </MenuContainer>
      <SearchContainer>
        <SearchInput onChange={event => setInputValue(event.target.value)} />
        <SearchButton onClick={() => handleSearch(inputValue)}>Search</SearchButton>
      </SearchContainer>

    </Container>
  )
}
export default Header;