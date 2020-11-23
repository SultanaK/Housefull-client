import React, { Component } from 'react'
import  './Footer.css'
export default class Footer extends Component {
    render() {
        return (
            <section className='footer'>
                 
                <p>&#169; Animation Station {new Date().getFullYear()}</p>
            </section>
        )
    }
}
