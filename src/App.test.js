import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
   render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
 /*  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument(); */
});
