import React from 'react';
import { Link } from 'react-router-dom';
import HousewillContext from '../HousewillContext';
import Item from './Item';
import PropTypes from 'prop-types';
export default class Main extends React.Component {
	static defaultProps = {
		match: {
			params: {}
		}
	};
	static contextType = HousewillContext;

	render() {
		const { categoryId } = this.props.match.params;
		const { items } = this.context;
		const getItemsForCategory = (items = [], categoryId) =>
			!categoryId ? items : items.filter((item) => item.category_id === parseInt(categoryId));

		const itemsForCategory = getItemsForCategory(items, categoryId);
		
		return (
			<div className="mainpage__main">
				<ul className="itemList">
					{itemsForCategory.map((item) => (
						<li key={item.index}>
							<Item
								title={item.title}
								itemId={item.id}
								link={<img className="DisplayImg" src={item.link} alt={item.title} />}
								price={item.price}
								/*  description={item.description} */
							/>
						</li>
					))}
				</ul>
				<Link id="add-item-link" to="/add-item">
					<button className="add-new-item" type="submit">Add New Item </button>
					
				</Link>
			</div>
		);
	}
}

Main.propTypes = {
	match: PropTypes.any
};
