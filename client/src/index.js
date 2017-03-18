
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, browserHistory } from 'react-router';
import App from './components/App/App';
import './index.html';

import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

console.log(hashHistory);
console.log(browserHistory);

const router = (
	<Router history={BrowserHistory}>
		<Route path="/" component={App}>

		</Route>
	</Router>
)

ReactDOM.render(
	router,
	document.getElementById('root')
);
