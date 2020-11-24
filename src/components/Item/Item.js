import React from 'react';
import HousewillContext from '../../HousewillContext';
import { Link } from 'react-router-dom';
import './Item.css'
import PropTypes from 'prop-types';

export default class Item extends React.Component {
	static defaultProps = {
		match: {
			params: {},
		},

		location: {},
		history: {
			push: () => {},
		},
	};
	static contextType = HousewillContext;

	render() {
		return (
			<div className='item'>
				<div key={this.props.id}>
					<Link to={`/item/${this.props.itemId}`}>
						<h3>{this.props.title}</h3>
						<p id='DilplayImg_item_id'>{this.props.link}</p>
						<p id='Display_description'>{this.props.description}</p>
						<p>${this.props.price}</p>
					</Link>
				</div>
			</div>
		);
	}
}

Item.propTypes = {
	id: PropTypes.number,
	description: PropTypes.string,
	name: PropTypes.string,
	modified: PropTypes.string,
};
