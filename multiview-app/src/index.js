import React from 'react';
import ReactDOM from 'react-dom';
import Header from './static/Header';

import Home from './components/Home'
import About from './components/About'
import App from './static/App';


import {Router, Route, IndexRoute, browserHistory} from 'react-router'





ReactDOM.render((
  <Router history={browserHistory} >
  	<Route path='/' component={Header} >
  		<IndexRoute component={Home} />
  		<Route path="about" component={About} />
  		<Route path="App" component={App} />
  	</Route>
  </Router>
  ),document.getElementById('app'));
