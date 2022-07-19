import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  margin: 30px 15px;
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fca311;
  border-radius: 20px;
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
  border: 0;

  @media (max-width: 400px) {
    width: 150px;
    height: 40px;
    font-size: 22px;
  }

  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#fca311')};
  }
`;
