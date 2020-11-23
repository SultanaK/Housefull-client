import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<About />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
        .create(<About />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

