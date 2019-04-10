import { createGlobalStyle } from 'styled-components';

const theme = {
  breakpoints: [30, 36, 48, 62, 75, 100],
  fontSizes: [0.75, 0.875, 1, 1.125, 1.5, 1.875],
  colors: {
    color01: '#FFF',
    color02: '#000',
    color03: 'rgba(0,0,0,.125)',
    color04: '#ffffff80'
  },
  fontWeights: {},
  lineHeights: {},
  letterSpacings: {},
  shadows: {},
  borders: {},
  radii: {},
  opacity: {}
};

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-size: 16px;
    background-color: #fff;
  }
`;

export { theme, GlobalStyle };
