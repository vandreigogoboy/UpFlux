import React from 'react';
import { Router } from 'react-router-dom'
import history from '../src/services/history'
import GlobalStyle from './style/global'
import Routes from './router';

function App() {
  return (
    <Router history={history}>
      <GlobalStyle />
      <Routes />
    </Router>


  );
}

export default App;
