import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './LandingPage.css';

export default class LandinglPagege extends Component {
	state = {
		redirect: false,
		where: '',
	};
	switchPage = (link) => {
		if (link === 'main-app' ) {
			link = '/';
		}

		this.setState({
			redirect: !this.state.redirect,
			where: link,
		});

		return;
	};


	render() {
		const { redirect, where } = this.state;
		if (redirect) {
			return <Redirect to={`/${where}`} />;
		}

		return (
			<div className="banner__outer">
				<section className='banner'>
					<div className='Overlay'>
						<h2>HouseWill</h2>
						<p>	A place where you can donate your gently used household items</p>
						<p>Through this site, the community can come together to help each
							other and make our community a better place to live</p>
						<button onClick={() => this.switchPage('main-app')}>
							Get started
						</button>
					</div>
				</section>

				<footer>&#169; HouseWill {new Date().getFullYear()}</footer>
			</div>
		);
	}
}
