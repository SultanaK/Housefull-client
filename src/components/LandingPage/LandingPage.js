import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default class LandingPage extends Component {


	render() {
		

		return (
			<div className="banner__outer">
				<section className='banner'>
					<div className='Overlay'>
						<h2>Animation Station</h2>
						<p>Create and save CSS animations right in your browser</p>
            <p>Let's be creative today...</p>
            <Link to ='/main'>
						<button renderAs="button">
                Get started
            </button>
              </Link>
					</div>
				</section>

				<footer>&#169; HouseWill {new Date().getFullYear()}</footer>
			</div>
		);
	}
}