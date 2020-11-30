import React, { Component } from 'react';
import HousewillContext from '../../HousewillContext';
import config from '../../config';
import ValidationError from '../Error/ValidationError';
import PropTypes from 'prop-types';
import './AddItem.css';

export default class AddItem extends Component {
	static contextType = HousewillContext;
	constructor(props) {
		super(props);
		this.state = {
			appError: null,
			formValid: false,
			errorCount: null,
			title: '',
			categoryId: '',
			description: '',
			price: '',
			email: '',
			link: '',
			errors: {
				categoryId: 'You must select a category',
				ttle: 'You must enter a item title',
				description: 'You must enter a description',
				link: 'You must enetr a image link',
				price: 'You must eneter  price',
				email: 'Add your email address',
			},
		};
	}

	updateErrorCount = () => {
		let errors = this.state.errors;
		let count = 0;

		Object.values(errors).forEach((val) => {
			if (val.length > 0) {
				count++;
			}
		});
		this.setState({ errorCount: count });
		let valid = count === 0 ? true : false;
		this.setState({ formValid: valid });
	};

	updateCategoryId(categoryId) {
		this.setState({ categoryId: { value: categoryId, touched: true } });
	}

	validateEntry = (title, value) => {
		let err = '';
		if (title === 'title') {
			if (value.length === 0) {
				return 'Title is required.';
			} else if (title.length < 3) {
				return 'Title must be at least 3 characters long';
			}
		}
		const { errors } = { ...this.state };
		errors[title] = err;
		this.setState({ errors });
	};

	handleChange = (e) => {
		const { name, value } = e.target;

		console.log(name);
		console.log(value);
		this.setState({ [name]: value.trim() });
		this.validateEntry(name, value.trim());
		this.updateErrorCount();
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const { title, link, price, email, categoryId, description } = e.target;
		const item = {
			title: title.value,
			link: link.value,
			price: price.value,
			email: email.value,
			category_id: categoryId.value,
			description: description.value,
		};
		this.setState({ appError: null });

		fetch(config.API_ITEMS, {
			method: 'POST',
			body: JSON.stringify(item),
			headers: {
				'content-type': 'application/json',
			},
		})
			.then((res) => {
				if (!res.ok) {
					return res.json().then((error) => {
						throw error;
					});
				}
				return res.json();
			})
			.then((data) => {
				title.value = '';
				link.value = '';
				price.value = '';
				email.value = '';
				description.value = '';
				categoryId.value = '';
				this.context.addItem(data);
				this.setState({ data });
				this.props.history.push('/', data);
			})
			.catch((error) => {
				this.setState({ appError: error });
			});
	};

	render() {
		const { errors } = this.state;
		const categorys = this.context.categorys;
		if (this.state.appError) {
			return <p className='error'>{this.state.appError}</p>;
		}

		return (
			<div className='container'>
				<form className='add-item' onSubmit={this.handleSubmit}>
					<h3>Add New Item of your choice</h3>
					<label htmlFor='name'>
						<h4>Item Name</h4>
					</label>
					<input
						type='text'
						className='add-item__title'
						name='title'
						id='title'
						defaultValue=''
						onChange={(e) => this.handleChange(e)}
					/>

					{errors.name && <ValidationError message={errors.name} />}
					<label htmlFor='linl'>
						<h4>Image Link</h4>
					</label>
					<input
						type='text'
						className='add-image__link'
						name='link'
						id='link'
						defaultValue=''
						onChange={this.handleChange}
					/>

					{errors.name > 0 && <ValidationError message={errors.link} />}
					<label htmlFor='price'>
						<h4>Item Price in $:</h4>
					</label>
					<input
						type='text'
						className='add-item__price'
						name='price'
						id='price'
						defaultValue=''
						onChange={this.handleChange}
					/>

					{errors.name > 0 && <ValidationError message={errors.price} />}
					<label htmlFor='content'>
						<h4>Item Description</h4>
					</label>
					<textarea
						type='text'
						className='add-tem__content'
						name='description'
						id='description'
						defaultValue=''
						onChange={this.handleChange}
					/>
					{errors.name > 0 && <ValidationError message={errors.email} />}
					<label htmlFor='content'>
						<h4>Add your Email</h4>
					</label>
					<textarea
						type='text'
						className='add-tem__content'
						name='email'
						id='email'
						defaultValue=''
						onChange={this.handleChange}
					/>
					<select
						id='categoryId'
						name='categoryId'
						value={this.state.categoryId}
						onChange={this.handleChange}>
						<option value=''>Select a ctaegory</option>
						{categorys.map((category) => (
							<option key={category.id} value={category.id}>
								{category.category_name}
							</option>
						))}
					</select>
					<button
						type='submit'
						id='submit-btn'>				
						Submit
					</button>
				</form>
			</div>
		);
	}
}

AddItem.propTypes = {
	history: PropTypes.any.isRequired,
};
