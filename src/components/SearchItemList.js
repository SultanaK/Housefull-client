
import HousewillContext from '../HousewillContext';
import Item from '../components/Item'
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
                <ul className="search_item_result" >
                    {
                        searchItems.map((item,i) => (
                            <li key={i}>
                                <Item
                                    title={item.title}
                                    itemId={item.id}
                                    link={<img className="DisplayImg" src={item.link} alt={item.title} />}
                                    price={item.price}/> 
                            </li>
                        ))
                }
                </ul>
                {/* <Link id="add-item-link" to="/add-item">
                   <button className ="add-new-item">  Add New Item </button>
            </Link>  */}
                <Link id="add-item-link" to="/add-item">
                    <button className="add-new-item" type="submit">Add New Item </button>

                </Link>
            </div>
        )
    }
}

