import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from '../components/Search';

describe('Search', () => {
    it('renders correctly to match the Search snapshot', () => {
        const {asFragment} = render(<Search />);

        expect(asFragment()).toMatchSnapshot();
    });

    it('renders form correctly', () => {
        render(<Search />);

        const searchBox = screen.getByRole('textbox', {placeholder:'Search for an image'});
        expect(searchBox).toBeInTheDocument();
        expect(searchBox).toHaveClass('search-input');
        expect(searchBox).toHaveAttribute('type', expect.stringContaining('text'));

        const goButton = screen.getByRole('button', {name: /go/i});
        expect(goButton).toHaveClass('submit-button');
        expect(goButton).toBeEnabled();
        expect(goButton).toHaveAttribute('type','submit');
        expect(goButton).toHaveTextContent(/go/i)
    });
});