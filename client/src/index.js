
import React from 'react';
import ReactDOM from 'react-dom';

import router from './router';
import './index.html';

import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
	router,
	document.getElementById('root')
);

// for hot reloading this router component.
if(module.hot){
	module.hot.accept('./router.js', () => {
		const updatedRouter = require('./router.js').default;
		console.log('new router', updatedRouter);
		ReactDOM.render(
			updatedRouter,
			document.getElementById('root')
		);
	});
}