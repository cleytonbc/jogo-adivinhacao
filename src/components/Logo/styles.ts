import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: transparent;
  border: 0;
  @media (max-width: 400px) {
    svg {
      width: 350px;
    }
  }
`;
