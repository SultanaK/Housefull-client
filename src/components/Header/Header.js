import React, { Component } from 'react';
import './Header.css';
import Search from '../Search/Search';

export default class Header extends Component {
	render() {
		return (
			<div>
				<main className='bg-img'>
					<header className='banner'>
						<label htmlFor='app_header' className='app_header'>
							{' '}
							Housewill
						</label>
						<h5 htmlFor='subHeading'>
							{' '}
							A place where you can donate your gently used household items
						</h5>
						<p id='white'>
							Through this site, the community can come together to help each
							other and make our community a better place to live.
						</p>
					</header>
					{/*  <input type="text" id="myInput" placeholder="Search  item you need...." title="Type in a name"/> */}
				</main>
				<Search history={this.props.history} />
			</div>
		);
	}
}
