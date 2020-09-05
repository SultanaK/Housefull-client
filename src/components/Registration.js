import React, { Component } from 'react'

export default class Registration extends Component {
    render() {
        return (
             <section className="additem"> 
                    
                <h3>Register a new user</h3>
                     
                    <form className='signup-form'>
                        <div>
                            <label htmlFor="first-name">First name</label>
                            <input placeholder='First Name' type="text" name='first-name' id='first-name'></input>
                        </div>
                        <div>
                            <label htmlFor="last-name">Last name</label>
                            <input type="text" name='last-name' id='last-name' placeholder='Last Name'></input>
                        </div>
                        <div>
                            <label htmlFor="username">Email</label>
                            <input type="text" name='username' id='username'></input>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' id='password'></input>
                        </div>
                    <div className="additem__buttons">
                        <button>Cancel</button>
                        <button type="submit" >Signup</button>
                    </div>  
                    </form>
            </section>     
            
        )
    }
}
