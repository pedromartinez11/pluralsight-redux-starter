import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import configureStore from './store/configureStore';
import routes from './routes';

import {loadCourses} from './actions/courseActions';

import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadCourses()); // load courses by triggering the load courses action

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById("app")
);

