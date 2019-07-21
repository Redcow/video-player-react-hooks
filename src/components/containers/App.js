import React from 'react';
import Player from './Player';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Player} />
      <Route exact path='/:activeVideo' component={Player} />
      <Route render={()=><h3>404 Mauvais URL</h3>} />
    </Switch>
  </BrowserRouter>
)

export default App;