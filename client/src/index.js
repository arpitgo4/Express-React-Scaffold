
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter } from 'react-router-dom';

import App from './components/App/App';
import Header from './components/Header/Header.component';
import NodeJS from './components/Body/Nodejs.component';
import ExpressJS from './components/Body/Expressjs.component';

import './index.html';

import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const router = (
	<BrowserRouter>
		<Route path="/" component={Header}>
			<Route path="/" component={Header} />
		</Route>  
	</BrowserRouter>
)

ReactDOM.render(
	router,
	document.getElementById('root')
);

// for hot reloading this router component.
if(module.hot){
	module.hot.accept('./index.js', () => {
		const updated = require('./index.js').default;
		ReactDOM.render(
     		router, 
     		document.getElementById('react-app')
     	);
	});
}