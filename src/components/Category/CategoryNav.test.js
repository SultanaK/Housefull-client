import React from 'react';
import ReactDOM from 'react-dom';
import Category from './CategoryNav';
import renderer from 'react-test-renderer';
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Category />, div);
    ReactDOM.unmountComponentAtNode(div);
});
it('renders the UI as expected', () => {
    const tree = renderer
        .create(<Category />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});