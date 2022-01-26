import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';

import Router from './Router';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import mixin from './styles/mixin';

ReactDOM.render(
  <RecoilRoot>
    <GlobalStyle />
    <ThemeProvider theme={{ ...theme, ...mixin }}>
      <Router />
    </ThemeProvider>
  </RecoilRoot>,
  document.getElementById('root')
);
