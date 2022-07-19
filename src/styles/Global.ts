import { createGlobalStyle } from 'styled-components';

import gameBackground from '../assets/gameBackground.svg';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 300;
}
body{
  background: #1D3557 url(${gameBackground}) 70% top;
  -webkit-font-smoothing: antialiased;
  }
body, input, button {
  font: 16px Rajdhani, sans-serif;
}


button{
  cursor: pointer;
}
`;
