import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
export default class Nav extends Component {
    render() {
        return (

            <div className='topnav'>
                <section className='navbar-right'>
                    <Link to='/'>Home</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/how-to'>How-to-Use</Link>
                </section>
                
                
                
                <section className='navbar-left'>
                    <Link to='/'>Housewill</Link>
                    
                </section>
                

            </div>
        )
    }
}
