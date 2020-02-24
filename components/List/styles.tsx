import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px 0px 24px 42px;;
  position: absolute;
  width: 78%;
  top: 120px;
  left: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  max-height: calc(100vh - 120px);
  overflow-y: scroll;
  margin-bottom: 24px;
`;