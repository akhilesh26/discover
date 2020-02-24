import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
  background: #131A20;
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: white;
  /* margin-left: 42px; */
  padding: 42px;
`;

export const MenuContainer = styled.div`
  margin-left: 15%;
  display: flex;
  flex-direction: row;
  align-items: center;
  & > * {
    margin: 0 16px;
  }
`;

export const Item = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: ${({isActive}) => isActive ? 'white' : '#73C2FB' };
  text-align: center;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 5%;
`;

export const SearchInput = styled.input`

`;

export const SearchButton = styled.button`
  
`