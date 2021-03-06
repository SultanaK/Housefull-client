import React, { Component } from 'react';
import HousewillContext from '../../HousewillContext';
import config from '../../config';
import  './Search.css'
export default class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchItems: [],
			items: [],
			searchTerm: '',
		};
	}
	static contextType = HousewillContext;

	handleSubmit = (e) => {
		e.preventDefault();

		

		fetch(
			`${config.API_ENDPOINT}/items/search?search=${e.target.search.value}`,
			{
				method: 'GET',
				headers: {
					'content-type': 'application/json',
				},
			}
		)
			.then((res) => {
				if (!res.ok) {
					return res.json().then((error) => {
						throw error;
					});
				}
				return res.json();
			})
			.then((items) => {
				this.context.setSearchItems(items);
				this.props.history.push('/search');
			});
	};

	render() {
		return (
			<div className='search_item_form'>
				<form
					onSubmit={(e) => this.handleSubmit(e)}
					htmlFor='submit-form'
					className='search_item_form_align example' >
					<label aria-label='Search' id='search-Item-lebel'>
						Search item of your choice
					</label>
					<input
						type='text'
						defaultValue='table'
						name='search'
						id='search'
						placeholder='Search your Items'
						aria-label='Search'
						required
					/>
					<button type='submit'> Submit </button>
				</form>
			</div>
		);
	}
}
