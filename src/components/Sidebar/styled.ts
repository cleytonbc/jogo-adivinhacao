import styled from 'styled-components';

export const Container = styled.div`
  max-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 400px) {
    max-width: 400px;
  }
`;
