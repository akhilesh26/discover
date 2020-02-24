import styled from 'styled-components';

export const Container = styled.div`
  width: 200px;
  position: fixed;
  right: 0;
  height: calc(100vh);
  z-index: 200;
  box-shadow: -1px 0px 5px -1px rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 42px 32px;
`

export const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #7c7c7c;
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: 400;
  color: #7c7c7c;
`

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

export const Box =  styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  & > * {
    width: 100%;
    margin: 0 8px;
    &:first-child {
      margin-left: 0px;
    }
    &:last-child {
      margin-right: 0px;
    }
  }
`