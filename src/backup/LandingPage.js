import React,{ Component } from 'react';
import Category from '../components/Category'
import ListItem from './ListItem'
import Header from '../components/Header'

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
