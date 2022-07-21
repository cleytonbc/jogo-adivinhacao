import styled from 'styled-components';
import { animation, linearGradient, radialGradient } from 'polished';

export const Container = styled.div`
  display: flex;
  padding: 100px;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 500px;
  height: 300px;
  background-color: #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  flex-direction: column;

  @media (max-width: 400px) {
    padding: 30px 0px;
    width: 380px;
    height: 320px;
  }

  p {
    text-align: center;
    font-size: 40px;
    width: 300px;
    font-weight: 700;

    span {
      color: #fca311;
    }
  }
`;
