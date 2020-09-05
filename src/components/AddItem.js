import React, { Component } from 'react'

export default class AddItem extends Component {
    render() {
        return (
            <section>

                <h3>Add a new item</h3>

                <form class='newitem-form'>
                    <div>
                        <label htmlFor="item-title">Title</label>
                        <input placeholder='Title' type="text" name='item-title' id='first-name'></input>
                    </div>
                    <div>
                        <label htmlFor="link">Add Image Link</label>
                        <input type="text" name='last-name' id='last-name' placeholder='Last Name'></input>
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <input type="text" name='username' id='username'></input>
                    </div>
                    <div>
                        <label htmlFor="price">Price</label>
                        <input type="password" name='password' id='password'></input>
                    </div>
                    <div className="additem__buttons">
                        <button>Cancel</button>
                        <button type="submit" >Save</button>
                    </div>  
                </form>
            </section>    
        )
    }
}
