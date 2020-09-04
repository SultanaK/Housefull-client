import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Nav extends Component {
    render() {
        return (

             /* <section className="topnav">
                <section className="navbar-left">
                    <Link to= "/">Home</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/about">About</Link>
                </section>
                <section className="navbar-right">
                    <Link to="/login">Login</Link>
                    <Link to="/">Logout</Link>
                    <Link to="/registration">Register</Link>
                </section>
            </section>  */
            <div className='topnav'>
             <section className='navbar-left'>
                <Link to='/'>Home</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/about'>About</Link>
            </section>
            <section className='navbar-right'>
                <Link to='/'>Logout</Link>
                <Link to='/login'>Login</Link>
                <Link to='/registration'>Register</Link>
                </section> 
                <h3>Add new Item</h3>
                
</div>
        )
    }
}
