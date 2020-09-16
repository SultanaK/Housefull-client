import React from 'react';
import HousewillContext from '../HousewillContext';
import { Link } from 'react-router-dom';
import config from '../config';
import PropTypes from 'prop-types';

export default class Item extends React.Component {
    static defaultProps = {
        handleDeleteItem: () => { },
        match: {
            params: {}
        }
    }

    static contextType = HousewillContext;


    handleDeleteItem = (event) => {
        const itemtId = this.props.id
       console.log(itemtId) 
        fetch(`${config.API_ITEMS}/${itemtId}`, {
            method: 'DELETE',
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.statusText)
                }
            })
            .then(() => {
                this.context.deleteItem(itemtId)
            })
            .catch(error => {
                console.error({ error })
            })
    }

    render() {
        return (
            <div className="item">
                <div key={this.props.id}>
                    <Link to={`/item/${this.props.itemId}`}>
                        <h3>{this.props.title}</h3>
                        <p>{this.props.link}</p>
                        <p>{this.props.description}</p>
                        <p>{this.props.price}</p>
                    </Link>
                    

                    <button
                        type="button"
                        id="delete-item-link-little"
                        onClick={this.handleDeleteItem}>
                        Delete Item
                    </button>

                </div>
            </div>
        )
    }
}


Item.propTypes = {
    id: PropTypes.number.isRequired,
    description: PropTypes.string,
    name: PropTypes.string,
    modified: PropTypes.string,
}