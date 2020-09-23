
import React, { Component } from 'react'
import './Logo.css'
import Search from '../components/Search'

export default class Header extends Component {
    render() {
        return (
           <div> 
                <main className="bg-img">
                    <header role="banner">
                        <h1>Housewill</h1>
                        <h2> A place where you can donate your gently used household items</h2>                        
                    </header>                    
                    {   /*  <input type="text" id="myInput" placeholder="Search  item you need...." title="Type in a name"/> */}
      
                </main>
                <Search history={this.props.history}/>   
        </div>
        )
    }
}


