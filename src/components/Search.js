import React, { Component } from 'react';
import HousewillContext from '../HousewillContext';
import config from '../config';
export default class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchItems: [],
			items: [],
			searchTerm: ''
		};
	}
	static contextType = HousewillContext;
    
	handleSubmit = (e) => {
		e.preventDefault();

		console.log(e.target.search.value);

		fetch(`${config.API_ENDPOINT}/items/search?search=${e.target.search.value}`, {
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			}
		})
			.then((res) => {
				if (!res.ok) {
					return res.json().then((error) => {
						throw error;
					});
				}
				return res.json();
			})
			.then((items) => {
				//this.setState({ searchItems: [...items] })
				console.log(items);

				this.context.setSearchItems(items);
				this.props.history.push('/search');
			});
	};

	render() {
		console.log(this.context.searchItems);
		return (
			<div className="search_item_form">
                <label aria-label="Search" id="search-Item-lebel">Search Item of your choice</label>
                
				<form onSubmit={(e) => this.handleSubmit(e)} htmlFor="submit-form">
					
                    <input type="text" defaultValue="baby" name="search" placeholder="Search your Items" aria-label="Search"/>
					
					<button type="submit">Submit</button>
                </form>
                
               

			</div>
		);
	}
}
