import React,{ Component } from 'react';
import Category from './Category'
import ListItem from './ListItem'
import Header from './Header'

export default class LandingPage extends Component {
    render() {
        return (
            <div className="langing-page">
                <Header />   
                <Category />
                <ListItem />
               
            </div>
        )
    }
}
