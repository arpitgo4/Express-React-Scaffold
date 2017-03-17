import React from 'react';

export default class Pagination extends React.Component {

	constructor(){
		super();
	}

	render(){
		let counter = 0;
		return(
			<ul className="pagination pagination-lg">
				{this.props.value.map(value => {
						counter++;
						return <li><a href="javascript:void(0)" /*className=`${counter == 1 ? 'active': ''}`*/
									onClick={((counter) => () => this.props.handleClick(counter))(counter)}>
									{counter}
									</a>
								</li>
					}
				)}
			</ul>
		);
	}

}