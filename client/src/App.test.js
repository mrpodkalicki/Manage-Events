import React from 'react';
import { render } from '@testing-library/react';
import AppComponets from './components/App.componets';

test('renders learn react link', () => {
  const { getByText } = render(<AppComponets />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
