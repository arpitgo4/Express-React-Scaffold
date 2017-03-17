import React from 'react';

import superagent from 'superagent';

import Stock from '../Stock/Stock';
import Pagination from '../Pagination/Pagination';

export default class StockList extends React.Component {

	constructor(){
		super();
		this.state = { stocks: [], stocksToRender: [] };
	}

	componentWillMount(){
		this.getStocks();
		this.firstIndex = 0;
	}

	render(){

		this.NUMBER_OF_STOCKS_ON_ONE_PAGE = 300;
		return(
			<div className="table-responsive">
			<table id="stocklist" className="table table-hover">
				<thead >
					<th className="text-center">Symbol</th>
					<th className="text-center">Name</th>
					<th className="text-center">MarketCap</th>
					<th className="text-center">Sector</th>
					<th className="text-center">Industry</th>
					<th className="text-center">Update Time</th>
				</thead>
					{this.state.stocksToRender.map(stock =>
						(<Stock key={stock.symbol} value={stock} />)
					)}
			</table>
				<Pagination handleClick={this.pageClick.bind(this)}
					value={this.state.stocks.slice(0, this.state.stocks.length / this.NUMBER_OF_STOCKS_ON_ONE_PAGE)} />
			</div>
		);
	}

	pageClick(page){
		const prevStocks = this.state.stocks;
		this.setState({ stocks: prevStocks, 
						stocksToRender: prevStocks.slice((page - 1) * this.NUMBER_OF_STOCKS_ON_ONE_PAGE, page * this.NUMBER_OF_STOCKS_ON_ONE_PAGE)
					});
	}

	getStocks(){
		superagent
			.get('/api/stocks')
			.end((err, res) => {
				this.setState({stocks: res.body, stocksToRender: res.body.slice(this.firstIndex, this.NUMBER_OF_STOCKS_ON_ONE_PAGE)});
			});
	}

}