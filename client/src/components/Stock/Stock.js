import React from 'react';

export default class Stock extends React.Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
			<tbody>
				<tr>
				<td>{this.props.value.symbol}</td>
					<td>{this.props.value.name}</td>
					<td>{this.props.value.marketcap}</td>
					<td>{this.props.value.sector}</td>
					<td>{this.props.value.industry}</td>
					<td>{new Date(this.props.value.updateTime).toString()}</td>
				</tr>
			</tbody>
		);
	}

}