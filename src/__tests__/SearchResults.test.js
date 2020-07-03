import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchResults from '../components/SearchResults';


describe('SearchResults', () => {
    it('renders correctly to match the SearchResults snapshot', () => {
        const results = ['img1', 'img2']
        const {asFragment} = render(<SearchResults results={results}/>);

        expect(asFragment()).toMatchSnapshot();
    });

    it('renders SearchResults correctly if there is a result from API', () => {
        const results = ['img1','img2']
        
        render(<SearchResults results = {results}/>);
            const images = screen.getAllByRole('img');
        
            expect(images).toHaveLength(2);      
    });
    
      it('renders Searchresults when the result is an empty array from API', () => {
            const results = [];
        
            render(<SearchResults results = {results}/>);
        
            const message = screen.getByRole('heading');
            const image = screen.queryByRole('img');
        
            expect(image).not.toBeInTheDocument();
            expect(message).toHaveClass('no-result');
            expect(message).toHaveTextContent(/no result/i);
      });
});