import styled from 'styled-components';
import { darken, lighten, shade } from 'polished';

export const Container = styled.button`
  display: flex;
  align-items: center;
  align-content: center;
  height: 40px;
  background: transparent;
  border: 0;
  color: #efefef;
  cursor: default;

  @media (max-width: 400px) {
    max-width: 400px;
  }

  span:first-child {
    margin-left: 15px;
  }

  span {
    margin-left: 5px;

    a {
      text-decoration: none;
      color: #efefef;
    }

    a:hover {
      color: ${darken(0.3, '#efefef')};
      cursor: pointer;
    }
  }
`;
