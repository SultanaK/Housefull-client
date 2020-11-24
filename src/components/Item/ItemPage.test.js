import React from 'react';
import ReactDOM from 'react-dom';
import ItemPage from './ItemPage';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<BrowserRouter>
			<ItemPage />
		</BrowserRouter>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
