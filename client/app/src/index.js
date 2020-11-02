import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Route, Router, Switch } from 'react-router-dom';
import configureStore from './store';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootswatch/dist/minty/bootstrap.min.css';
import './index.css';

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={ configureStore() }>
    <Router history={ history }>
      <Switch>
        <Route path="/" render={ props => <App { ...props } /> } />
      </Switch>
    </Router>
  </Provider>, document.getElementById('root')
);