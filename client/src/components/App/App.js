import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Col, Jumbotron, Container, Row } from 'react-bootstrap';

import classnames from 'classnames';
import superagent from 'superagent';

import '../style.css';

export default class App extends Component {
	
	render() {
    	return (
       		<div id="app-container" className="container-fluid text-center">
        		<div id="app">
        			<h1 className="jumbotron">Heading</h1>
        		</div>
        	</div>
    	);
	}    	
}

