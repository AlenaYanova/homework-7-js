import routes from '../../routes';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../Header';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header/>
      <Switch>
        {routes.map((item, idx) => <Route key={`route-${idx}`}{...item} />)}
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;