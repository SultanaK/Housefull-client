import React from 'react'
import ITEMS from './store'

export default function ItemPage(props) {
    const item = ITEMS.find(p =>
        p.id == (props.match.params.itemId)
    )|| {}
    console.log(item)
    return (
        <div className='Item'>
            <h3>{item.title}</h3>
            <h3> {item.description}</h3>
            <img className="DisplayImg" src={`${item.link}`} alt={item.title} />
            <button type="submit">Delete</button>
        </div>
    )
}
