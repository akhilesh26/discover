import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  /* height: 350px; */
  /* background: white; */
`;

export const Title = styled.div`
  font-family: "Open Sans";
  font-weight: bold;
  font-size: 16px;
  color: #73C2FB;
  margin-top: 4px;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 350px;
  opacity: 1;
  transition: .3s ease-in-out;
  &:hover {
    opacity: .5;
  }
  &:hover ~ ${Title} {
    color: #41f841;
  }
`;

export const Detail = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #7c7c7c;
  text-align: center;
`

