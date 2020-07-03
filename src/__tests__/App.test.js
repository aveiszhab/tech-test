import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

describe('App', () => {
  it('renders correctly to match the App snapshot', () => {
    const {asFragment} = render(<App />);

    expect(asFragment()).toMatchSnapshot()
  });

  it('renders App correctly', () => {
    render(<App/>);

    const nasaImage = screen.getByRole('img', {name: /nasa/i});

    expect(nasaImage).toHaveClass('nasa-logo');
    expect(nasaImage).toHaveAttribute('src', expect.stringContaining('nasa-worm-logo'));
    expect(nasaImage).toHaveAttribute('alt', expect.stringContaining('nasa-logo'))
  });

});