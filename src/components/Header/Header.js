import React, { Component } from 'react';
import './Header.css';
import '../Logo/Logo.css';
import Search from '../Search/Search';

export default class Header extends Component {
	render() {
		return (
			<div>
				<main className='bg-img'>
					{/* <label htmlFor='app_header' className='app_header'>
						Housewill
					</label> */}
					<h1>Housewill</h1>
					<h5 htmlFor='subHeading'>
						A place where you can donate your gently used household items
					</h5>
				</main>
				<Search history={this.props.history} />
			</div>
		);
	}
}
