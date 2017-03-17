import React from 'react';

import Search from '../Search/Search';
import StockList from '../StockList/StockList';

export default class Body extends React.Component {

	constructor(){
		super();
		this.state = {};
	}

	render(){
		return (
			<div className="container">
				<div className="container">
					<Search />
				</div>
				<div style={{marginTop: 10}}>
					<StockList />
				</div>
			</div>
		);
	}

}