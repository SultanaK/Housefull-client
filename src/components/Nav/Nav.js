import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/house-green.png'
import './Nav.css'
export default class Nav extends Component {
    render() {
        return (

            <div className='topnav'>
                <section className='navbar-right'>
                        
                    <Link to='/contact'>Contact</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/how-to'>Help</Link>
                </section>
                            
                <section className='navbar-left'>
                    <Link to='/'>Home
                    
                    </Link> 
                </section>
                

            </div>
        )
    }
}
