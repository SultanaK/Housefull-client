import React from 'react';
import LandingPage from './LandingPage';
import ReactDOM from 'react-dom';

it('renders LandingPage component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LandingPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });