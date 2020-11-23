import React, { Component } from 'react';
import HousewillContext from '../../HousewillContext';
import config from '../../config';
import ValidationError from '../Error/ValidationError';
import PropTypes from 'prop-types';
export default class UpdateItem extends Component {
    static contextType = HousewillContext;
   
    
    constructor(props) {
        super(props)
        this.state = {
            appError: null,
            formValid: false,
            errorCount: null,
            title: '',
            categoryId: '',
            description: '',
            price: '',
            link: '',
            errors: {
                categoryId:
                    'You must select a category',
                title: 'You must enter a item title',
                description: 'You must enter a description',
                link: 'You must enetr a image link',
                price: 'You must eneter  price'
            }
        }
    }

    componentDidMount() {
          const upadateItemId = this.props.match.params.itemId 
        fetch(`config/${upadateItemId}` , {
method: 'GET'
              })
    .then(/* some content omitted */)
        .then(responseData => {
              this.setState({
        /* fields state updates here */
                  })
        })
    .catch(error => {/* some content omitted */ })
    }


    updateErrorCount = () => {
        let errors = this.state.errors;
        let count = 0;

        Object.values(errors).forEach(val => {
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
                return 'Title is required.'
            }
            else if (title.length < 3) {
                return "Title must be at least 3 characters long";
            }
        }
        const { errors } = { ...this.state };
        errors[title] = err;
        this.setState({ errors });
    }

    handleChange = e => {

        const { name, value } = e.target;

        console.log(name)
        console.log(value)
        this.setState(
            { [name]: value.trim() },
        );
        this.validateEntry(name, value.trim());
        this.updateErrorCount();
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
        /*  if (this.state.errorCount > 0) return; */

        const { title, link, price, categoryId, description } = e.target;
        const item = {
            title: title.value,
            link: link.value,
            price: price.value,
            category_id: categoryId.value,
            description: description.value,

        };
        this.setState({ appError: null });
        
        fetch(`${config.API_ENDPOINT}/items/${this.props.match.params.updateItemId}`, {
            method: 'PATCH',
            body: JSON.stringify(item),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => {
                        throw error;
                    });
                }
                return res.json();
            })
            .then(data => {
                title.value = '';
                link.value = '';
                price.value = '';
                description.value = '';
                categoryId.value = '';
                this.context.updateItem(data);
                this.setState({ data });
                this.props.history.push('/', data);
            })
            .catch(error => {
                this.setState({ appError: error });
            });
    };

    render() {
        const { errors } = this.state;
        const categorys = this.context.categorys;
        if (this.state.appError) {
            return <p className="error">{this.state.appError}</p>;
        }

        const  { title, link, price, description } = this.state

        return (
            <form className="add-item" onSubmit={this.state.handleSubmit}>
                <legend>
                    <h3>Add Item</h3>
                </legend>
                <label htmlFor="name"><h4>Item Name</h4></label>
                <input
                    type="text"
                    className="add-item__title"
                    name="title"
                    id="title"
                    value={title}
                    onChange={e => this.handleChange(e)}
                />

                {errors.name && (
                    <ValidationError message={errors.name} />)}
                <label htmlFor="linl"><h4>Image Link</h4></label>
                <input
                    type="text"
                    className="add-image__link"
                    name="link"
                    id="link"
                    value={link}
                    onChange={this.handleChange}
                />

                {errors.link.length > 0 && (
                    <ValidationError message={errors.link} />)}
                <label htmlFor="price"><h4>Item Price in $:</h4></label>
                <input
                    type="text"
                    className="add-item__price"
                    name="price"
                    id="price"
                    value={price}
                    onChange={this.handleChange}
                />

                {errors.price.length > 0 && (
                    <ValidationError message={errors.price} />)}
                <label htmlFor="content"><h4>Item Content</h4></label>
                <textarea
                    type="text"
                    className="add-tem__content"
                    name="description"
                    id="description"
                    value={description}
                    onChange={this.handleChange}
                />
                <select
                    id="categoryId"
                    name="categoryId"
                    value={this.state.categoryId}
                    onChange={this.handleChange}
                >
                    <option value="">Select a ctaegory</option>
                    {categorys.map(category => (<option key={category.id} value={category.id}>{category.category_name}</option>))}
                </select>
                <button
                    type="submit"
                    id="submit-btn"
                
                >Submit
                    </button>

                { /*   {this.state.errorCount !== null ? (
                    <p className="form-status">
                        Form is {this.state.formValid ? 'complete' : 'incomplete'}
                    </p>
                ) : null} */}

            </form>
        );
    }
}


UpdateItem.propTypes = {
    history: PropTypes.any.isRequired
}