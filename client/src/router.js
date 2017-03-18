import React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory, hashHistory } from 'react-router';

import App from './components/App/App';
import Header from './components/Header/Header.component';
import NodeJS from './components/Body/Nodejs.component';
import ExpressJS from './components/Body/Expressjs.component';

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={App} >
			<IndexRoute component={NodeJS} />
			<Route path="/express" component={ExpressJS} />
		</Route>
	</Router>
)

export default router;