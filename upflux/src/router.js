import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Detalhar from './pages/Detalhar';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Cadastro" component={Cadastro} />
        <Route path="/Detalhar" component={Detalhar} />

      </Switch>
    </BrowserRouter>
  );
}
