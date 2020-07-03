import React from 'react';
import { render, screen, fireEvent, wait } from '@testing-library/react';
import Search from '../components/Search';

describe('Search', () => {
    it('renders correctly to match the Search snapshot', () => {
        const mockHandleSubmit = jest.fn();
        const {asFragment} = render(<Search setSearchResultList ={mockHandleSubmit}/>);

        expect(asFragment()).toMatchSnapshot();
    });

    it('renders form correctly', () => {
        const mockHandleSubmit = jest.fn();
        render(<Search setSearchResultList ={mockHandleSubmit}/>);

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

    it('calls onChange and onSubmit callback handlers', async () => {
        const mockHandleSubmit = jest.fn();
        render(<Search setSearchResultList ={mockHandleSubmit}/>);

        const searchBox = screen.getByRole('textbox', {placeholder:'Search for an image'});
        const goButton = screen.getByRole('button', {name: /go/i});

        fireEvent.change(searchBox, {
            target: {value: 'moon'}
        });
        fireEvent.click(goButton);

        expect(searchBox.value).toBe('moon');
        await wait(() => {
            expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
        });
        
    });

});