import './css/skeleton.css';
import './css/normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import routes from './routes'

const App = () => (
  <div className="container">
    <Header/>
    <Switch>
      {routes.map((item) => <Route {...item} />)}
    </Switch>
  </div>
);

ReactDOM.render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById('app'));