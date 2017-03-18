import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Col, Jumbotron, Container, Row } from 'react-bootstrap';

import classnames from 'classnames';
import superagent from 'superagent';

import '../style.css';

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = { msg: '' };
    }

    componentWillMount(){
        superagent
            .get('/api/hello')
            .end((err, res) => {
                this.setState({
                    msg: res.body.msg
                });
            });
    }
	
	render() {
    	return (
       		<div id="app-container" className="container-fluid">
        		<div id="app" className="row">
                    <h1 className="col-sm-6 col-sm-offset-3 well well-lg text-center">{this.state.msg}</h1>
        		</div>
                <div className="container">
                    <h1 className="page-header">Node-React-Scaffholding</h1>
                    <div className="container">
                        <p className="lead">NodeJS</p>
                        <p>NodeJS is the platform to run javascript on Google's V8 engine.</p>
                    </div>
                </div>
        	</div>
    	);
	}    	
}

