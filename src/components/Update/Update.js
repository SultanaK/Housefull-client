import React, { Component } from 'react';
import HousewillContext from '../../HousewillContext';
import config from '../../config';

import PropTypes from 'prop-types';

const Required = () => <span className="EditItem__required">*</span>;

export default class Update extends Component {
	static defaultProps = {
		match: { params: {} },
		history: {
			push: () => {}
		}
	};
	static propTypes = {
		match: PropTypes.shape({
			params: PropTypes.object
		}),
		history: PropTypes.shape({
			push: PropTypes.func
		}).isRequired
	};
	static contextType = HousewillContext;
	state = {
		error: null,
		id: '',
		title: '',
		link: '',
		description: '',
		price: '',
		email:'',
		category_id: ''
	};
	componentDidMount() {
		const { itemId } = this.props.match.params;
		console.log(this.props);
		fetch(`${config.API_ENDPOINT}/items/${itemId}`, {
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			}
		})
			.then((res) => {
				if (!res.ok) return res.json().then((error) => Promise.reject(error));

				return res.json();
			})
			.then((responseData) => {
				this.setState({
					id: responseData.id,
					title: responseData.title,
					link: responseData.link,
					description: responseData.description,
					 email: responseData.email, 
					price: responseData.price
				});
			})
			.catch((error) => {
				console.error(error);
				this.setState({ error });
			});
	}
	handleChangeTitle = (e) => {
		this.setState({ title: e.target.value });
	};

	handleChangeUrl = (e) => {
		this.setState({ link: e.target.value });
	};

	handleChangeDescription = (e) => {
		this.setState({ description: e.target.value });
	};

	handleChangePrice = (e) => {
		this.setState({ price: e.target.value });
	};
	handleChangeEmail = (e) => {
		this.setState({ price: e.target.value });
	};
	handleChangeCategory = (e) => {
		this.setState({ category_id: e.target.value });
	};
	handleSubmit = (e) => {
		e.preventDefault();
		const { itemId } = this.props.match.params;
		const { id, title, link, description, price,email,  category_id } = this.state;
		const newItem = { id, title, link, description, price, email,category_id };

		fetch(config.API_ITEMS + `/${itemId}`, {
			method: 'PATCH',
			body: JSON.stringify(newItem),
			headers: {
				'content-type': 'application/json'
			}
		})
			.then((res) => {
				if (!res.ok) return res.json().then((error) => Promise.reject(error));
			})
			.then(() => {
				this.resetFields(newItem);
				this.context.updateItem(newItem);
				this.props.history.push('/');
			})
			.catch((error) => {
				console.error(error);
				this.setState({ error });
			});
	};
	resetFields = (newFields) => {
		this.setState({
			id: newFields.id || '',
			title: newFields.title || '',
			link: newFields.link || '',
			description: newFields.description || '',
			price: newFields.price || '',
			category_id: newFields.category_id || ''
		});
	};
	handleClickCancel = () => {
		this.props.history.push('/');
	};
	render() {
		const categorys = this.context.categorys;
		const { error, title, link, description, price, category_id } = this.state;
		return (
			<section className="EditItem">
				<h2>Edit Item</h2>
				<form className="EditItem__form" onSubmit={this.handleSubmit}>
					<div className="EditItem__error" role="alert">
						{error && <p>{error.message}</p>}
					</div>
					<input type="hidden" name="id" />
					<div>
						<label htmlFor="title">
							Title <Required />
						</label>
						<input
							type="text"
							name="title"
							id="title"
							placeholder="Great website!"
							required
							value={title}
							onChange={this.handleChangeTitle}
						/>
					</div>
					<div>
						<label htmlFor="link">
							Image URL <Required />
						</label>
						<input type="url" name="link" id="link" required value={link} onChange={this.handleChangeUrl} />
					</div>
					<div>
						<label htmlFor="description">Item Description</label>
						<textarea
							name="description"
							id="description"
							value={description}
							onChange={this.handleChangeDescription}
						/>
					</div>
					<div>
						<label htmlFor="price">
							Price <Required />
						</label>
						<input
							type="number"
							name="price"
							id="price"
							required
							value={price}
							onChange={this.handleChangePrice}
						/>
						<select
							id="category_id"
							name="category_id"
							value={category_id}
							onChange={this.handleChangeCategory}
						>
							<option value="">Select a ctaegory</option>
							{categorys.map((category) => (
								<option key={category.id} value={category.id}>
									{category.category_name}
								</option>
							))}
						</select>
					</div>
					<div className="EditItem__buttons">
						<button type="button" onClick={this.handleClickCancel}>
							Cancel
						</button>{' '}
						<button type="submit">Update</button>
					</div>
				</form>
			</section>
		);
	}
}
