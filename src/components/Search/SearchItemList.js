import HousewillContext from '../../HousewillContext';
import Item from '../Item/Item'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class SearchItemList extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    };
    static contextType = HousewillContext;
    render() {
        const { searchItems } = this.context

        console.log(this.context.searchItems)
        return (
            <div className="search-item">
                <ul className="search_item_result">
                     {searchItems.length ?
                        searchItems.map(( item, i) => (
                            <li key={i}>
                                <Item
                                    title={item.title}
                                    itemId={item.id}
                                    link={<img className="DisplayImg" src={item.link} alt={item.title} />}
                                    price={item.price}
                                    email={item.email}/>
                            </li>
                        )): <div> Item not found</div>
                    }
                </ul>
                
                <div className="button_center">

                    <Link id="add-item-link" to="/add-item">
                        <button className="add-new-item" type="submit">Add New Item </button>

                    </Link>
                </div>
            </div>
        )
    }
}
