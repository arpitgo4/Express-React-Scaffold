import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router';

import 'bootstrap/dist/css/bootstrap.css';
import { Button, Col, Jumbotron, Container, Row } from 'react-bootstrap';

import classnames from 'classnames';
import superagent from 'superagent';

import configureStore from '../../store.config';

import Header from '../Header/Header.component';
import NodeJS from '../Body/Nodejs.component';
import ExpressJS from '../Body/Expressjs.component';

import '../style.css';

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = { heading: 'Hello, ExpressJS!'};
    }
	
	render() {
    	return (            
            <Provider store={configureStore({})}>
                <div id="app-container" className="container-fluid">
                    <Header />                
                	{this.props.children}
                </div>
            </Provider>
    	);
	}    	
}

