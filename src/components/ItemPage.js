import React from 'react';
import HousewillContext from '../HousewillContext';
import config from '../config';


export default class ItemPage extends React.Component {

    static contextType = HousewillContext;

    handleDeleteItem = (event) => {
        const itemNum = this.props.match.params
        this.props.history.push(`/`)
        const itemStr = Object.values(itemNum).toString()
        const itemId = Number(itemStr);

        fetch(`${config.API_ENDPOINT}/items/${itemId}`, {
            method: 'DELETE',
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.statusText)
                }
            })
            .then(() => {
                this.context.deleteItem(itemId)
            })
            .catch(error => {
                console.error({ error })
            })
    }

    render() {

        const { items = [] } = this.context
        const { itemId } = this.props.match.params
        
        const getItems = items
            .filter(item => item.id == itemId)
            .map(item => {
                return (
                    <section className="items-display" key={item.id}>
                        <h3>{item.title}</h3>
                        <img className="DilplayImg_item" src={item.link} alt={item.title}/> 
                        
                       <h4> Price: $ {item.price}</h4>
                        <h4> Item Description: </h4>{item.description
                            .split("/\n \r|\n/")
                            .map((text, i) =>
                                <p key={i}>{text}</p>
                            )}
                    </section>
                )
            }
            )

        return (
            <div className="whole-items-display">
                {getItems}
                <button
                    type="button"
                    id='delete-item-link-little'
                    onClick={() => this.handleDeleteItem(this.props.id, this.context.deleteItem)}>
                    Delete Item
                </button>
            </div>
        )
    }
}
