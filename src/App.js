import React, { Component } from 'react';
import { Provider } from 'react-redux';
import setupStore from './redux/setupStore';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CrudContainer from './redux/containers/CrudContainer';

import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();
const store = setupStore();

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path='/' component={CrudContainer} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}
