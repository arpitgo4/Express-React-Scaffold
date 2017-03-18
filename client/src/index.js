
import React from 'react';
import ReactDOM from 'react-dom';

import router from './layouts/router';
import './index.html';

import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import './style.css';

ReactDOM.render(
	router,
	document.getElementById('root')
);

// for hot reloading this router component.
if(module.hot){
	module.hot.accept('./layouts/router.js', () => {
		const updatedRouter = require('./layouts/router.js').default;
		console.log('new router', updatedRouter);
		ReactDOM.render(
			updatedRouter,
			document.getElementById('root')
		);
	});
}