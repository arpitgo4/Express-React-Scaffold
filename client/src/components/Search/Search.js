import React from 'react';

import superagent from 'superagent';

export default class Search extends React.Component {

	constructor(){
		super();
		this.state = {};
	}

	render(){
		return (
			<div className="row">
				<input ref="search" className="form-control" style={{marginBottom : 5}} 
				placeholder="Search by Name or Symbol" />
				<button onClick={() => this.handleClick()} className="btn btn-primary btn-md pull-right">Search</button>
			</div>
		);
	}

	handleClick(){
		console.log('searching for...', this.refs.search.value);
	}

}