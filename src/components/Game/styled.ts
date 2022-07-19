import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 500px;
  height: 300px;
  background-color: #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  flex-direction: column;

  @media (max-width: 400px) {
    width: 380px;
    height: 320px;
  }
`;

export const Table = styled.div`
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 400px) {
    max-width: 300px;
  }
`;

export const Number = styled.div`
  background-color: #e5e5e5;
  padding: 3px;
  width: 42px;
  height: 42px;
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3px;
  font-weight: 500;
`;
