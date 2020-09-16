import React, { Component } from 'react';
import ValidationError from './ValidationError';
import config from '../config'
import HousewillContext from '../HousewillContext'
export default class AddItem extends Component {
	static contextType = HousewillContext
	
		
		state = {
			name: {
				value: '',
				touched: false
			},
			link: {
				value: '',
				touched: false
			},
			price: {
				value: '',
				touched: false
			},
			description: {
				value: '',
				touched: false
			}
		};
	

	updateName(name) {
		this.setState({ name: { value: name, touched: true } });
	}
	updateImageLink(link) {
		this.setState({ link: { value: link, touched: true } });
	}
	updatePrice(price) {
		this.setState({
			price: { value: price, touched: true }
		});
	}

	updateDescription(description) {
		this.setState({
			description: {
				value: description,
				touched: true
			}
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		const { name, link, price, description } = this.state;

		console.log('Name: ', name.value);
		console.log('Image Link: ', link.value);
		console.log('Price: ', price.value);
		console.log('Product description: ', description.value);
	}

	validateName() {
		const name = this.state.name.value.trim();
		if (name.length === 0) {
			return 'Name is required';
		} else if (name.length < 3) {
			return 'Name must be at least 3 characters long';
		}
	}
	validateImageLink() {
		const link = this.state.link.value.trim();
		if (link.length === 0) {
			return 'Link is required';
		} else if (link.length < 1 || link.length > 72) {
			return 'Title must be between 1 and 72 characters long';
		}
	}
	validatePrice() {
		const price = this.state.price.value.trim();
		if (price.length === 0) {
			return 'Pice is required';
		} else if (price.length < 0) {
			return 'Password must be grater than 0';
		}
	}

	validateDescription() {
		const description = this.state.description.value.trim();

		if (description.length === 0) {
			return 'Password is required';
		} else if (description.length < 1 || description.length > 200) {
			return 'Password must be between 1 and 72 characters long';
		}
	}

	render() {
		const nameError = this.validateName();
		const linkError = this.validateImageLink();
		const priceError = this.validatePrice();
		const descriptionError = this.validateDescription();

		return (
			<form className="registration" onSubmit={(e) => this.handleSubmit(e)}>
				<h3>Add Item</h3>
				<div className="registration__hint">* required field</div>
				<div className="form-group">
					<label htmlFor="name">Name *</label>
					<input
						type="text"
						className="registration__control"
						name="name"
						id="name"
						onChange={(e) => this.updateName(e.target.value)}
					/>
					{this.state.name.touched && <ValidationError message={nameError} />}
				</div>
				<div className="form-group">
					<label htmlFor="link">Image Link *</label>
					<input
						type="text"
						className="registration__control"
						name="link"
						id="link"
						required
						onChange={(e) => this.updateImageLink(e.target.value)}
					/>
					{this.state.name.touched && <ValidationError message={linkError} />}
				</div>
				<div className="form-group">
					<label htmlFor="password">Price *</label>
					<input
						type="password"
						className="registration__control"
						name="password"
						id="password"
						onChange={(e) => this.updatePrice(e.target.value)}
					/>
					<div className="registration__hint">6 to 72 characters, must include a number</div>
					{this.state.price.touched && <ValidationError message={priceError} />}
				</div>
				<div className="form-group">
					<label htmlFor="description">Description</label>
					<input
						type="dscription"
						className="registration__control"
						name="description"
						id="description"
						onChange={(e) => this.updateDescription(e.target.value)}
					/>
					{this.state.description.touched && <ValidationError message={descriptionError} />}
				</div>

				<div className="registration__button__group">
					<button type="reset" className="registration__button">
						Cancel
					</button>
					<button
						type="submit"
						className="registration__button"
						disabled={
							this.validateName() ||
							this.validateImageLink() ||
							this.validatePrice() ||
							this.validateDescription()
						}
					>
						Add
					</button>
				</div>
			</form>
		);
	}
}
