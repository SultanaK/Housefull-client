import React from 'react';
import ReactDOM from 'react-dom';
import Category from './CategoryNav';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Category />, div);
	ReactDOM.unmountComponentAtNode(div);
});

