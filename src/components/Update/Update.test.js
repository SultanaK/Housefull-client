import React from 'react';
import ReactDOM from 'react-dom';
import Update from './Update';

it('renders without crashing', () => {
    const div = document.createElement('div');
    
    /* const props = {
        match: { params: {} },
        history: {
            push: () => { }
        },
    } */
    ReactDOM.render(
        <Update />,
        div);
    ReactDOM.unmountComponentAtNode(div);
});

