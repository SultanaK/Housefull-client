import React, { Component } from 'react'
import ITEMS from '../components/store'
import { Link } from 'react-router-dom'
export default class ListItem extends Component {
    render() {
        return (
            <div>
                <section>
                    <header>
                        <h3>Display All item</h3>
                    </header>
                    <p>[<em>placeholder for screenshot of all items</em>]</p>
                    <ul className='ItemList'>
                        {ITEMS.map(item =>
                            <li key={item.id}>
                                <Link to={`/item/${item.id}`}>          
                                    {`${item.title}`} 
                                </Link>
                                {<img className='DisplayImg'
                                    src={`${item.link}`} alt={`${item.title}`} />} 
                            </li>
                        )}
                    </ul>
                </section> 
               
               <Link to='/additem'> <button type="submit"> Add new Item</button></Link>
            </div>
        )
    }
}
